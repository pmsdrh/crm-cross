import React, { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import type { InputRef } from 'antd';
import { Button, Checkbox, Form, Input, Modal, Space, Table } from 'antd';
import type { ColumnType, ColumnsType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import {SearchOutlined} from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';


interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: 'Sydney No. 1 Lake asfasdsdasdadasdasdasdasdasdasdsadasdasdasdasdas dasd asd asd as das das Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];


type DataIndex = keyof DataType;

const Contacts: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<DataType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`جستجو ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns: ColumnsType<DataType> = [
    {
      title: 'نام',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      ...getColumnSearchProps('name'),
      sorter: (a, b) => a.address.length - b.address.length,
    },
    {
      title: 'سن',
      dataIndex: 'age',
      key: 'age',
      width: '20%',
      ...getColumnSearchProps('age'),
      sorter: (a, b) => a.address.length - b.address.length,
    },
    {
      title: 'آدرس',
      dataIndex: 'address',
      key: 'address',
      ...getColumnSearchProps('address'),
      sorter: (a, b) => a.address.length - b.address.length,
    },
    {
      title: 'عملیات',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => <a>action</a>,
    },
  ];


  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
    <div>
      <Button className='beau' type="primary" onClick={showModal}>
        + افزودن جدید
      </Button>

      <Modal title="افزودن افراد"
        open={isModalOpen} 
        onOk={handleOk} 
        onCancel={handleCancel}
        cancelText="لغو"
        okText="تایید">
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
      >
        <Form.Item className='beau' label="نام" name="firstname">
          <Input placeholder="نام" />
        </Form.Item>
        <Form.Item className='beau' label="نام خانوادگی" name="lastname">
          <Input placeholder="نام خانوادگی" />
        </Form.Item>
        <Form.Item className='beau' label="شماره تلفن" name="phonenumber">
          <Input placeholder="شماره تلفن" />
        </Form.Item>
        <Form.Item className='beau' label="آدرس" name="address">
          <TextArea
          placeholder="آدرس: (تهران - خیابان ولیعصر - کوچه 17 پلاک 4 - واحد دو ...)"
          autoSize={{ minRows: 2, maxRows: 6 }}
          />
        </Form.Item>
      </Form>
      </Modal>

      <Table columns={columns} dataSource={data} scroll={{ x: "max-content" }}/>
    </div>
  );
};

export default Contacts;