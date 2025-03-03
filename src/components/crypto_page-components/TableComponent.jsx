/* eslint-disable react/prop-types */

const TableComponent = ({ data }) => {
  return (
    <tbody>
      {data.map((row, index) => (
        <tr
          key={index}
          className="table-row align-middle border-b border-b-gray-200 "
        >
          {/* First Column: Symbol, Description, and Swap Free Indicator */}
          <td className="p-4 ">
            <div className="">
              <div className="flex items-center ">
                <span>{row.symbol}</span>
                <button className="md:hidden">
                  <i className="ri-information-2-line text-sm text-gray-500"></i>
                </button>
              </div>
              <p className="text-gray-500 text-sm whitespace-pre-line">
                {row.description}
              </p>
              {row.swapFree && (
                <span className="flex items-center text-green-500 gap-0.5">
                  <i className="ri-circle-fill text-[10px] text-green-500"></i>
                  <p className="text-sm">Swap free available</p>
                </span>
              )}
            </div>
          </td>

          {/* Other Columns: Customize keys as needed */}
          <td className="p-4 text-right">
            <div className="text-base leading-6">{row.value1}</div>
          </td>
          <td className="p-4 text-right hidden md:table-cell">
            <div className="text-base leading-6">{row.value2}</div>
          </td>
          <td className="p-4 text-right hidden md:table-cell">
            <div className="text-base leading-6">{row.value3}</div>
          </td>
          <td className="p-4 text-right hidden md:table-cell">
            <div className="text-base leading-6">{row.value4}</div>
          </td>
          <td className="p-4 text-right hidden md:table-cell">
            <div className="text-base leading-6">{row.value5}</div>
          </td>
          <td className="p-4 text-right hidden md:table-cell">
            <div className="text-base leading-6">{row.value6}</div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

// TableComponent.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       symbol: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       swapFree: PropTypes.bool,
//       value1: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//       value2: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//       value3: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//       value4: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//       value5: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//       value6: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     })
//   ).isRequired,
// };

export default TableComponent;
