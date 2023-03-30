import React from 'react'
import "./MainLayout.css"
import "./BaseReset.css"
import "./BaseTypography.css"
import Navbar from './Navbar'

function MainLayout() {
  return (
    <div className='layout'>
      <div className='layout_nav'>
        <Navbar />
      </div>

      <div className='layout_content'>
        <div className='main_content'>
          <div className='layout_header'>
            <h4>Sales Dashboard</h4>
            <div className='icon_container'>
              <i className='icon light'></i>
              <i className='icon notif'></i>
            </div>
          </div>

          <div className='content_container first'>

            <div className='numbers_container'>

              <div className='number_container'>
                <span className='number_container_title'>Total revenue</span>
                <div className='inner_number_container'>
                  <span className='main_numbers'>$203.378</span>
                  <span className='side_numbers'>+6,32%</span>
                </div>
              </div>

              <div className='number_container'>
                <span className='number_container_title'>Total costumer</span>
                <div className='inner_number_container'>
                  <span className='main_numbers'>$55.544</span>
                  <span className='side_numbers'>+3,54%</span>
                </div>
              </div>

              <div className='number_container'>
                <span className='number_container_title'>Total profit</span>
                <div className='inner_number_container'>
                  <span className='main_numbers'>$333.653</span>
                  <span className='side_numbers'>+8,12%</span>
                </div>
              </div>

            </div>

            <div className='statistics_title'>
              <h5 className='title'>Spending Statistics</h5>

              <ul className='picker'>
                <li className='option'>Day</li>
                <li className='option picked'>Week</li>
                <li className='option'>Year</li>
              </ul>

            </div>

            <div className='statistics_container'>
              <span className='statistics_container_title'>Income</span>
              <div className='inner_stats_container'>
                <span className='main_numbers'>$10.823,43</span>
                <span className='side_numbers'>+2,32%</span>
              </div>
              <span className='statistics_container_title'>Total income in a week</span>

              {/* <table className='graph'>
                <tbody>
                <tr className="qtr" id="q1">
                  <th scope="row">Sun</th>
                  <td class="sent bar"><p>$18,450.00</p></td>
                  <td class="paid bar"><p>$16,500.00</p></td>
                </tr>

                <tr className="qtr" id="q2">
                  <th scope="row">Mon</th>
                  <td class="sent bar"><p>$18,450.00</p></td>
                  <td class="paid bar"><p>$16,500.00</p></td>
                </tr>

                <tr className="qtr" id="q3">
                  <th scope="row">Tue</th>
                  <td class="sent bar"><p>$18,450.00</p></td>
                  <td class="paid bar"><p>$16,500.00</p></td>
                </tr>

                <tr className="qtr" id="q4">
                  <th scope="row">Wed</th>
                  <td class="sent bar"><p>$18,450.00</p></td>
                  <td class="paid bar"><p>$16,500.00</p></td>
                </tr>

                <tr className="qtr" id="q5">
                  <th scope="row">Thu</th>
                  <td class="sent bar"><p>$18,450.00</p></td>
                  <td class="paid bar"><p>$16,500.00</p></td>
                </tr>

                <tr className="qtr" id="q6">
                  <th scope="row">Fri</th>
                  <td class="sent bar"><p>$18,450.00</p></td>
                  <td class="paid bar"><p>$16,500.00</p></td>
                </tr>

                <tr className="qtr" id="q7">
                  <th scope="row">Sat</th>
                  <td class="sent bar"><p>$18,450.00</p></td>
                  <td class="paid bar"><p>$16,500.00</p></td>
                </tr>
                </tbody>
              </table> */}
            </div>

          </div>

          <div className='second_container'>
            <div className='content_header'>
              <h5 className='title'>Costumer Transaction</h5>
              <div className='view_all_container'><span>View All</span><i className='view_all_icon'></i></div>
            </div>

            <div className='content_container second'>
              <table className='transaction_table'>
                <tr className='tr_titles transaction_table_tr'>
                  <th className='costumer_th'>
                    <i className='tick'></i>
                    Costumer
                  </th>
                  <th>Item</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>

                <tr className='transaction_table_tr'>
                  <td className='costumer_th'>
                    <i className='tick'></i>
                    <i className='profile_pic'></i>
                    Johntosan
                  </td>
                  <td>Air Max 75</td>
                  <td>22 Aug 2022</td>
                  <td>Success</td>
                  <td>Action</td>
                </tr>

                <tr className='transaction_table_tr'>
                  <td className='costumer_th'>
                    <i className='tick'></i>
                    <i className='profile_pic'></i>
                    Kuproy Junkies
                  </td>
                  <td>Jordan Delta</td>
                  <td>18 Aug 2022</td>
                  <td>On Process</td>
                  <td>Action</td>
                </tr>

                <tr className='transaction_table_tr'>
                  <td className='costumer_th'>
                    <i className='tick'></i>
                    <i className='profile_pic'></i>
                    Arikunn
                  </td>
                  <td>Nike Asuna</td>
                  <td>18 Aug 2022</td>
                  <td>On Process</td>
                  <td>Action</td>
                </tr>

                <tr className='transaction_table_tr'>
                  <td className='costumer_th'>
                    <i className='tick'></i>
                    <i className='profile_pic'></i>
                    Deprie Riandi
                  </td>
                  <td>Jordan 2</td>
                  <td>17 Aug 2022</td>
                  <td>Success</td>
                  <td>Action</td>
                </tr>

                <tr className='transaction_table_tr'>
                  <td className='costumer_th'>
                    <i className='tick'></i>
                    <i className='profile_pic'></i>
                    Ikouwis
                  </td>
                  <td>Lebron</td>
                  <td>15 Aug 2022</td>
                  <td>Canceled</td>
                  <td>Action</td>
                </tr>

                <tr className='transaction_table_tr'>
                  <td className='costumer_th'>
                    <i className='tick'></i>
                    <i className='profile_pic'></i>
                    Dayat
                  </td>
                  <td>Air Max 75</td>
                  <td>24 Aug 2022</td>
                  <td>Success</td>
                  <td>Action</td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div className='side_content'>
          <h5>Costumer by Country</h5>
        </div>
      </div>
    </div>
  )
}

export default MainLayout
