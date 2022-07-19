const Tickets = () => {
    return (
        <section className="tickets">
            <div className="tickets__container">
                <h2 className="tickets__heading">Tickets</h2>
                <div className="tickets__grid">
                    <div className="ticket">
                        <h3 className="ticket__heading">1 day</h3>
                            <table className="ticket__description">
                                <thead>
                                    <tr className="ticket__head-row">
                                        <th className="tcket__heading">Include</th>
                                    </tr>  
                                </thead>
                                <tbody>
                                    <tr className="ticket__body-row">
                                        <td className="ticket__body-description">
                                            Access to both stages
                                        </td>
                                        <td className="ticket__body-description">
                                            Food and Drink
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr className="ticket__foot-row">
                                        <td className="ticket__footer">$100</td>
                                    </tr>
                                </tfoot>
                            </table>
                    </div>
                    <div className="ticket">
                        <h3 className="ticket__heading">2 days</h3>
                            <table className="ticket__description">
                                <thead>
                                    <tr className="ticket__head-row">
                                        <th className="tcket__heading">Include</th>
                                    </tr>  
                                </thead>
                                <tbody>
                                    <tr className="ticket__body-row">
                                        <td className="ticket__body-description">
                                            Access to both stages
                                        </td>
                                        <td className="ticket__body-description">
                                            Food and Drink
                                        </td>
                                        <td className="ticket__body-description">
                                            Event's shirt
                                        </td>
                                        <td className="ticket__body-description">
                                            VIP Access
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr className="ticket__foot-row">
                                        <td className="ticket__footer">$100</td>
                                    </tr>
                                </tfoot>
                            </table>
                    </div>
                </div>
            </div>
        </section>
      );
}
 
export default Tickets;