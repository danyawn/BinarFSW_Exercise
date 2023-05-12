const Table = ({ data }) => {
  // console.log('data filtered table', data)
  return (
    <table>
      <tbody>
        <tr>
          <th>Type</th>
          <th>Model</th>
          <th>Manufacture</th>
          <th>Description</th>
          <th>Specs</th>
          <th>Seat</th>
          <th>Key</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.model}</td>
            <td>{item.manufacture}</td>
            <td>{item.description}</td>

            <td>
              {item?.specs.map((data, index) => (
                <>
                  {index + 1} . {data} <br />
                </>
              ))}
            </td>
            <td>{item.capacity}</td>
            {
              item.available ?
                <>
                  <p>Dengan Kunci</p>
                </>
                :
                <>
                  <p>Tanpa Kunci</p>
                </>
            }
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
