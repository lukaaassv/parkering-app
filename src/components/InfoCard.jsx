import "./InfoCard.css";

function InfoCard(){
    return (<div className = "info-card">
        <div className="info-header">
            <h2>Information om parkering</h2>
        </div>
        <div className="info-body">
            <p>Under vecka 42 - 18 gäller datumparkering i centrala Rättvik för att underlätta för snöröjningen. Området sträcker
                sig från Centralgatan till Enåbron.
                Här kan du på ett enkelt sätt se vilka parkeringsregler som gäller för dagen.  Avgiften för felparkering 
                är 600kr.
                
                </p>
        </div>
    </div>
    )


}

export default InfoCard