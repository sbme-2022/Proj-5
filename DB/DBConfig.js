const sqlite3=require('sqlite3').verbose();
const fetch=require('node-fetch')


const Databases = "./DB/Database.db";
// import {fetch} from 'node-fetch';

var db = new sqlite3.Database(Databases, (err) => {
    if (err) {
        console.error(err.message);
    }
    else {
        console.log("Connected to the Database database in sqlite.");
    }
}
);

async function getUser() {
    try {
        const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (err) {
        console.log(err);
    }
}

var data = getUser()
var KeysArray = Object.keys(Object.values(data)[6])
var ValuesArray = Object.values(Object.values(data)[6])
// console.log(data)
console.log(KeysArray.length)

var sql = `select * from Currency`;
db.each(sql, (err, rows) => {
    if (err) { }
    console.log(rows)
})
const create_db=()=>{
    db.run(
        `CREATE TABLE IF NOT EXISTS Currency (
            ${KeysArray[0]} double,
            ${KeysArray[1]} double,
            ${KeysArray[2]} double,
            ${KeysArray[4]} double,
            ${KeysArray[5]} double,
            ${KeysArray[6]} double,
            ${KeysArray[7]} double,
            ${KeysArray[8]} double,
            ${KeysArray[9]} double,
            ${KeysArray[10]} double,
            ${KeysArray[11]} double,
            ${KeysArray[12]} double,
            ${KeysArray[13]} double,
            ${KeysArray[14]} double,
            ${KeysArray[15]} double,
            ${KeysArray[16]} double,
            ${KeysArray[17]} double,
            ${KeysArray[18]} double,
            ${KeysArray[19]} double,
            ${KeysArray[20]} double,
            ${KeysArray[21]} double,
            ${KeysArray[22]} double,
            ${KeysArray[23]} double,
            ${KeysArray[24]} double,
            ${KeysArray[25]} double,
            ${KeysArray[26]} double,
            ${KeysArray[27]} double,
            ${KeysArray[28]} double,
            ${KeysArray[29]} double,
            ${KeysArray[30]} double,
            ${KeysArray[31]} double,
            ${KeysArray[32]} double,
            ${KeysArray[33]} double,
            ${KeysArray[34]} double,
            ${KeysArray[35]} double,
            ${KeysArray[36]} double,
            ${KeysArray[37]} double,
            ${KeysArray[38]} double,
            ${KeysArray[39]} double,
            ${KeysArray[40]} double,
            ${KeysArray[41]} double,
            ${KeysArray[42]} double,
            ${KeysArray[43]} double,
            ${KeysArray[44]} double,
            ${KeysArray[45]} double,
            ${KeysArray[46]} double,
            ${KeysArray[47]} double,
            ${KeysArray[48]} double,
            ${KeysArray[49]} double,
            ${KeysArray[50]} double,
            ${KeysArray[51]} double,
            ${KeysArray[52]} double,
            ${KeysArray[53]} double,
            ${KeysArray[54]} double,
            ${KeysArray[55]} double,
            ${KeysArray[56]} double,
            ${KeysArray[57]} double,
            ${KeysArray[58]} double,
            ${KeysArray[59]} double,
            ${KeysArray[60]} double,
            ${KeysArray[61]} double,
            ${KeysArray[62]} double,
            ${KeysArray[63]} double,
            ${KeysArray[64]} double,
            ${KeysArray[65]} double,
            ${KeysArray[66]} double,
            ${KeysArray[67]} double,
            ${KeysArray[68]} double,
            ${KeysArray[69]} double,
            ${KeysArray[70]} double,
            ${KeysArray[71]} double,
            ${KeysArray[72]} double,
            ${KeysArray[73]} double,
            ${KeysArray[74]} double,
            ${KeysArray[75]} double,
            ${KeysArray[76]} double,
            ${KeysArray[77]} double,
            ${KeysArray[78]} double,
            ${KeysArray[79]} double,
            ${KeysArray[80]} double,
            ${KeysArray[81]} double,
            ${KeysArray[82]} double,
            ${KeysArray[83]} double,
            ${KeysArray[84]} double,
            ${KeysArray[85]} double,
            ${KeysArray[86]} double,
            ${KeysArray[87]} double,
            ${KeysArray[88]} double,
            ${KeysArray[89]} double,
            ${KeysArray[90]} double,
            ${KeysArray[91]} double,
            ${KeysArray[92]} double,
            ${KeysArray[93]} double,
            ${KeysArray[94]} double,
            ${KeysArray[95]} double,
            ${KeysArray[96]} double,
            ${KeysArray[97]} double,
            ${KeysArray[98]} double,
            ${KeysArray[99]} double,
            ${KeysArray[100]} double,
            ${KeysArray[101]} double,
            ${KeysArray[102]} double,
            ${KeysArray[103]} double,
            ${KeysArray[104]} double,
            ${KeysArray[105]} double,
            ${KeysArray[106]} double,
            ${KeysArray[107]} double,
            ${KeysArray[108]} double,
            ${KeysArray[109]} double,
            ${KeysArray[110]} double,
            ${KeysArray[111]} double,
            ${KeysArray[112]} double,
            ${KeysArray[113]} double,
            ${KeysArray[114]} double,
            ${KeysArray[115]} double,
            ${KeysArray[116]} double,
            ${KeysArray[117]} double,
            ${KeysArray[118]} double,
            ${KeysArray[119]} double,
            ${KeysArray[120]} double,
            ${KeysArray[121]} double,
            ${KeysArray[122]} double,
            ${KeysArray[123]} double,
            ${KeysArray[124]} double,
            ${KeysArray[125]} double,
            ${KeysArray[126]} double,
            ${KeysArray[127]} double,
            ${KeysArray[128]} double,
            ${KeysArray[129]} double,
            ${KeysArray[130]} double,
            ${KeysArray[131]} double,
            ${KeysArray[132]} double,
            ${KeysArray[133]} double,
            ${KeysArray[134]} double,
            ${KeysArray[135]} double,
            ${KeysArray[136]} double,
            ${KeysArray[137]} double,
            ${KeysArray[138]} double,
            ${KeysArray[139]} double,
            ${KeysArray[140]} double,
            ${KeysArray[141]} double,
            ${KeysArray[142]} double,
            ${KeysArray[143]} double,
            ${KeysArray[144]} double,
            ${KeysArray[145]} double,
            ${KeysArray[146]} double,
            ${KeysArray[147]} double,
            ${KeysArray[148]} double,
            ${KeysArray[149]} double,
            ${KeysArray[150]} double,
            ${KeysArray[151]} double,
            ${KeysArray[152]} double,
            ${KeysArray[153]} double,
            ${KeysArray[154]} double,
            ${KeysArray[155]} double,
            ${KeysArray[156]} double,
            ${KeysArray[157]} double,
            ${KeysArray[158]} double,
            ${KeysArray[159]} double,
            ${KeysArray[160]} double)`,
            
            console.log('Table Created'), (err) => {
            if (err) {
            } else {
            var sql = `INSERT INTO Currency VALUES (${ValuesArray[0]},${ValuesArray[1]},${ValuesArray[2]},${ValuesArray[4]},${ValuesArray[5]},${ValuesArray[6]},${ValuesArray[7]},${ValuesArray[8]},${ValuesArray[9]},${ValuesArray[10]},${ValuesArray[11]},${ValuesArray[12]},${ValuesArray[13]},${ValuesArray[14]},${ValuesArray[15]},${ValuesArray[16]},${ValuesArray[17]},${ValuesArray[18]},${ValuesArray[19]},${ValuesArray[20]},${ValuesArray[21]},${ValuesArray[22]},${ValuesArray[23]},${ValuesArray[24]},${ValuesArray[25]},${ValuesArray[26]},${ValuesArray[27]},${ValuesArray[28]},${ValuesArray[29]},${ValuesArray[30]},${ValuesArray[31]},${ValuesArray[32]},${ValuesArray[33]},${ValuesArray[34]},${ValuesArray[35]},${ValuesArray[36]},${ValuesArray[37]},${ValuesArray[38]},${ValuesArray[39]},${ValuesArray[40]},${ValuesArray[41]},${ValuesArray[42]},${ValuesArray[43]},${ValuesArray[44]},${ValuesArray[45]},${ValuesArray[46]},${ValuesArray[47]},${ValuesArray[48]},${ValuesArray[49]},${ValuesArray[50]},${ValuesArray[51]},${ValuesArray[52]},${ValuesArray[53]},${ValuesArray[54]},${ValuesArray[55]},${ValuesArray[56]},${ValuesArray[57]},${ValuesArray[58]},${ValuesArray[59]},${ValuesArray[60]},${ValuesArray[61]},${ValuesArray[62]},${ValuesArray[63]},${ValuesArray[64]},${ValuesArray[65]},${ValuesArray[66]},${ValuesArray[67]},${ValuesArray[68]},${ValuesArray[69]},${ValuesArray[70]},${ValuesArray[71]},${ValuesArray[72]},${ValuesArray[73]},${ValuesArray[74]},${ValuesArray[75]},${ValuesArray[76]},${ValuesArray[77]},${ValuesArray[78]},${ValuesArray[79]},${ValuesArray[80]},${ValuesArray[81]},${ValuesArray[82]},${ValuesArray[83]},${ValuesArray[84]},${ValuesArray[85]},${ValuesArray[86]},${ValuesArray[87]},${ValuesArray[88]},${ValuesArray[89]},${ValuesArray[90]},${ValuesArray[91]},${ValuesArray[92]},${ValuesArray[93]},${ValuesArray[94]},${ValuesArray[95]},${ValuesArray[96]},${ValuesArray[97]},${ValuesArray[98]},${ValuesArray[99]},${ValuesArray[100]},${ValuesArray[101]},${ValuesArray[102]},${ValuesArray[103]},${ValuesArray[104]},${ValuesArray[105]},${ValuesArray[106]},${ValuesArray[107]},${ValuesArray[108]},${ValuesArray[109]},${ValuesArray[110]},${ValuesArray[111]},${ValuesArray[112]},${ValuesArray[113]},${ValuesArray[114]},${ValuesArray[115]},${ValuesArray[116]},${ValuesArray[117]},${ValuesArray[118]},${ValuesArray[119]},${ValuesArray[120]},${ValuesArray[121]},${ValuesArray[122]},${ValuesArray[123]},${ValuesArray[124]},${ValuesArray[125]},${ValuesArray[126]},${ValuesArray[127]},${ValuesArray[128]},${ValuesArray[129]},${ValuesArray[130]},${ValuesArray[131]},${ValuesArray[132]},${ValuesArray[133]},${ValuesArray[134]},${ValuesArray[135]},${ValuesArray[136]},${ValuesArray[137]},${ValuesArray[138]},${ValuesArray[139]},${ValuesArray[140]},${ValuesArray[141]},${ValuesArray[142]},${ValuesArray[143]},${ValuesArray[144]},${ValuesArray[145]},${ValuesArray[146]},${ValuesArray[147]},${ValuesArray[148]},${ValuesArray[149]},${ValuesArray[150]},${ValuesArray[151]},${ValuesArray[152]},${ValuesArray[153]},${ValuesArray[154]},${ValuesArray[155]},${ValuesArray[156]},${ValuesArray[157]},${ValuesArray[158]},${ValuesArray[159]},${ValuesArray[160]})`;
            db.run(sql, function (err, result) {
                if (err) {
                    console.log(err)
                    return;
                }
        })

            }
        }
    );
}

module.exports=create_db