import React, { useState, useEffect } from 'react';

const DataTable = ({
  columns,
  data,
  loading = false,
  selectable = false,
  onRowSelect,
  className = '',
}) => {
  const [sortedData, setSortedData] = useState(data);
  const [sortConfig, setSortConfig] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    // Sort data whenever the `data` prop changes or sortConfig is updated
    let sortableData = [...data];
    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    setSortedData(sortableData);
  }, [data, sortConfig]);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handleRowSelect = (row) => {
    const isSelected = selectedRows.some((selectedRow) => selectedRow.id === row.id);
    let newSelectedRows;

    if (isSelected) {
      newSelectedRows = selectedRows.filter((selectedRow) => selectedRow.id !== row.id);
    } else {
      newSelectedRows = [...selectedRows, row];
    }
    setSelectedRows(newSelectedRows);

    if (onRowSelect) {
      onRowSelect(newSelectedRows);
    }
  };

  const handleSelectAll = () => {
    if (selectedRows.length === sortedData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(sortedData);
    }
  };

  const getSortIcon = (key) => {
    if (!sortConfig || sortConfig.key !== key) {
      return null;
    }
    return sortConfig.direction === 'ascending' ? '▲' : '▼';
  };

  const tableClasses = `w-full text-left border-collapse font-sans ${className}`;

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8 text-gray-500 italic">
        Loading...
      </div>
    );
  }

  const hasData = sortedData && sortedData.length > 0;

  return (
    <div className="overflow-x-auto rounded-lg shadow-md">
      <table className={tableClasses}>
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            {selectable && (
              <th className="px-4 py-3 border-b-2 border-gray-300 w-12">
                <input
                  type="checkbox"
                  checked={selectedRows.length === sortedData.length && sortedData.length > 0}
                  onChange={handleSelectAll}
                  className="rounded text-blue-500 focus:ring-blue-500"
                />
              </th>
            )}
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-4 py-3 font-semibold tracking-wide border-b-2 border-gray-300 cursor-pointer hover:bg-gray-300 transition-colors duration-150"
                onClick={() => handleSort(column.key)}
              >
                <div className="flex items-center">
                  {column.label}
                  <span className="ml-2">{getSortIcon(column.key)}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hasData ? (
            sortedData.map((row) => (
              <tr
                key={row.id}
                className={`transition-colors duration-150 ${
                  selectedRows.some((selectedRow) => selectedRow.id === row.id)
                    ? 'bg-blue-100'
                    : 'bg-white hover:bg-gray-100'
                }`}
              >
                {selectable && (
                  <td className="px-4 py-3 border-b border-gray-200">
                    <input
                      type="checkbox"
                      checked={selectedRows.some((selectedRow) => selectedRow.id === row.id)}
                      onChange={() => handleRowSelect(row)}
                      className="rounded text-blue-500 focus:ring-blue-500"
                    />
                  </td>
                )}
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="px-4 py-3 border-b border-gray-200 text-gray-800"
                  >
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr className="bg-white">
              <td colSpan={columns.length + (selectable ? 1 : 0)} className="px-4 py-4 text-center text-gray-500 italic">
                No data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
