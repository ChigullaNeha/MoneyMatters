import Popup from 'reactjs-popup'
import './index.css'

const TransactionHead = () => (
  <div>
    <h1>Transactions</h1>
    <Popup
      trigger={
      <button type="button">
        + Add Transaction
      </button>
    }>
    <p>Add Transaction</p>
    </Popup>
  </div>
)
export default TransactionHead
