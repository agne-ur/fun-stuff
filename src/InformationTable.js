

const style = {
    table: {
      borderCollapse: "collapse"
    },
    tableCell: {
      border: "1px solid gray",
      margin: 0,
      padding: "5px 10px",
      width: "max-content",
      minWidth: "150px"
    },
    form: {
      container: {
        padding: "20px",
        border: "1px solid #F0F8FF",
        borderRadius: "15px",
        width: "max-content",
        marginBottom: "40px"
      },
      inputs: {
        marginBottom: "5px"
      },
    }
  }

function InformationTable(props) {
    

    return (
      <table style={style.table} className="informationTable">
        <thead>
          <tr>
            <th style={style.tableCell}>First Name</th>
            <th style={style.tableCell}>Last name</th>
            <th style={style.tableCell}>Phone</th>
          </tr>
        </thead>
            {props.data.map((user, index) => {
                return (
                    <tr key={index}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.phoneNumber}</td>
                    </tr>   
                )
            })}
      </table>
    );
  }

export default InformationTable;