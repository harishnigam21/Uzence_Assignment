import React, { useState } from 'react';
import DataTable from '../component/DataTable';

export default {
  title: 'Data/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  argTypes: {
    columns: { control: 'object' },
    data: { control: 'object' },
    loading: { control: 'boolean' },
    selectable: { control: 'boolean' },
    onRowSelect: { action: 'rowSelected' },
  },
};

const Template = (args) => {
  const [tableData, setTableData] = useState(args.data);
  const handleSort = (sortedData) => {
    setTableData(sortedData);
  };
  return <DataTable {...args} data={tableData} onSort={handleSort} />;
};

const sampleColumns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role' },
];

const sampleData = [
  { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Admin' },
  { id: 2, name: 'Bob', email: 'bob@example.com', role: 'User' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'User' },
  { id: 4, name: 'Dana', email: 'dana@example.com', role: 'Admin' },
  { id: 5, name: 'Eve', email: 'eve@example.com', role: 'Guest' },
];

/**
 *  for a basic, populated data table with sorting.
 * Click on the column headers to sort the data.
 */
export const SortableTable = Template.bind({});
SortableTable.args = {
  columns: sampleColumns,
  data: sampleData,
};

/**
 *  demonstrating the empty state of the data table.
 */
export const EmptyState = Template.bind({});
EmptyState.args = {
  columns: sampleColumns,
  data: [],
};

/**
 *  demonstrating the loading state of the data table.
 */
export const LoadingState = Template.bind({});
LoadingState.args = {
  columns: sampleColumns,
  data: [],
  loading: true,
};

/**
 *  for a data table with selectable rows.
 */
export const SelectableRows = Template.bind({});
SelectableRows.args = {
  columns: sampleColumns,
  data: sampleData,
  selectable: true,
};

/**
 *  for a customized table with a different column set.
 */
export const CustomColumns = Template.bind({});
CustomColumns.args = {
  columns: [
    { key: 'product', label: 'Product' },
    { key: 'quantity', label: 'Quantity' },
    { key: 'price', label: 'Price' },
  ],
  data: [
    { id: 1, product: 'Laptop', quantity: 1, price: '$1200' },
    { id: 2, product: 'Mouse', quantity: 2, price: '$25' },
    { id: 3, product: 'Keyboard', quantity: 1, price: '$75' },
  ],
};
