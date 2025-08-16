# **Project Components Readme**

This document provides an overview and usage guide for the shared UI components in this project. Each component is built with React and styled using Tailwind CSS for a consistent and responsive design.

### **Installation**

These components are designed to be used in a React project that has [Tailwind CSS](https://tailwindcss.com/) configured. Simply copy the .jsx files into your project's src/components directory.

### **InputField**

A flexible and reusable input component with various states, sizes, and variants.

#### **Features**

* **States:** disabled, invalid (with errorMessage).  
* **Variants:** filled, outlined, ghost.  
* **Sizes:** sm (small), md (medium), lg (large).  
* **Optional:** Password visibility toggle and a clear button for text inputs.  
* **Theme:** Supports light and dark themes.

#### **Props**

| Prop | Type | Default | Description |
| :---- | :---- | :---- | :---- |
| value | string |  | The current value of the input. |
| onChange | (e: React.ChangeEvent) \=\> void |  | The change event handler. |
| label | string |  | The label for the input field. |
| placeholder | string |  | The placeholder text. |
| helperText | string |  | Text displayed below the input for additional context. |
| errorMessage | string |  | The error message to display for the invalid state. |
| disabled | boolean | false | If true, the input is disabled. |
| invalid | boolean | false | If true, the input shows an error state. |
| variant | 'filled' | 'outlined' | 'ghost' | 'outlined' | The visual style of the input. |
| size | 'sm' | 'md' | 'lg' | 'md' | The size of the input. |
| type | string | 'text' | The HTML input type (e.g., text, password, email). |
| isDarkMode | boolean | false | If true, styles the component for a dark theme. |

#### **Usage Example**

import InputField from './components/InputField';

const MyForm \= () \=\> {  
  const \[email, setEmail\] \= useState('');

  return (  
    \<div className="p-8 max-w-sm"\>  
      \<InputField  
        label="Email"  
        placeholder="Enter your email"  
        value={email}  
        onChange={(e) \=\> setEmail(e.target.value)}  
        helperText="We'll never share your email."  
      /\>  
      \<InputField  
        label="Password"  
        type="password"  
        variant="filled"  
        className="mt-4"  
      /\>  
    \</div\>  
  );  
};

### **DataTable**

A versatile data table component with sorting, row selection, and loading states.

#### **Features**

* **Display Tabular Data:** Renders a table based on columns and data props.  
* **Column Sorting:** Click on a column header to sort the data.  
* **Row Selection:** Checkboxes for single or multiple row selection.  
* **Loading State:** Displays a "Loading..." message when data is being fetched.  
* **Empty State:** Displays a "No data available" message when the data array is empty.

#### **Props**

| Prop | Type | Default | Description |
| :---- | :---- | :---- | :---- |
| data | T\[\] |  | The array of data to display in the table. |
| columns | Column\[\] |  | An array of column definitions. |
| loading | boolean | false | If true, shows a loading indicator. |
| selectable | boolean | false | If true, enables row selection. |
| onRowSelect | (selectedRows: T\[\]) \=\> void |  | Callback fired when rows are selected. |

#### **Usage Example**

import DataTable from './components/DataTable';

const MyDataView \= () \=\> {  
  const columns \= \[  
    { key: 'id', label: 'ID' },  
    { key: 'name', label: 'Name' },  
    { key: 'role', label: 'Role' },  
  \];  
  const users \= \[  
    { id: 1, name: 'Alice', role: 'Admin' },  
    { id: 2, name: 'Bob', role: 'User' },  
    { id: 3, name: 'Charlie', role: 'User' },  
  \];

  return (  
    \<div className="p-8"\>  
      \<DataTable  
        columns={columns}  
        data={users}  
        selectable  
      /\>  
    \</div\>  
  );  
};  
