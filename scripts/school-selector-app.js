        /**
         * INITIAL PRELOADED SCHOOLS (Fallback Data)
         */
        const PRELOADED_SCHOOLS = [
            { code: "9060200", name: "Yamfo Technical Institute", region: "Ahafo", district: "Tano North", category: "A", status: "Day/Boarding", gender: "Mixed", type: "TVET", progs: ["TECH", "GEN. SCI"] },
            { code: "9050301", name: "Otumfuo Osei Tutu II Tech. Inst.", region: "Ashanti", district: "Ejisu Municipal", category: "A", status: "Day/Boarding", gender: "Mixed", type: "TVET", progs: ["TECH", "BUS"] },
            { code: "9050101", name: "Kumasi Tech. Inst.", region: "Ashanti", district: "Kumasi Metro", category: "A", status: "Day/Boarding", gender: "Mixed", type: "TVET", progs: ["TECH"] },
            { code: "9030101", name: "Cape Coast Tech. Inst.", region: "Central", district: "Cape Coast Metro", category: "A", status: "Day/Boarding", gender: "Mixed", type: "TVET", progs: ["TECH"] },
            { code: "9010101", name: "Accra Tech. Trg. Centre", region: "Gt. Accra", district: "Ayawaso South Municipal", category: "A", status: "Day/Boarding", gender: "Mixed", type: "TVET", progs: ["TECH"] },
            { code: "0061201", name: "OLA Girls Senior High, Kenyasi", region: "Ahafo", district: "Asutifi North", category: "A", status: "Day/Boarding", gender: "Girls", type: "SHS", progs: ["HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            { code: "0060203", name: "Serwaa Kesse Girls Senior High", region: "Ahafo", district: "Tano North", category: "A", status: "Day/Boarding", gender: "Girls", type: "SHS", progs: ["AGRIC", "BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            { code: "0050102", name: "St. Louis Senior High, Kumasi", region: "Ashanti", district: "Oforikrom Municipal", category: "A", status: "Day/Boarding", gender: "Girls", type: "SHS", progs: ["BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            { code: "0050111", name: "Kumasi High School", region: "Ashanti", district: "Kumasi Metro", category: "A", status: "Day/Boarding", gender: "Boys", type: "SHS", progs: ["AGRIC", "BUS", "GEN. ARTS", "GEN. SCI"] },
            { code: "0050110", name: "Opoku Ware School", region: "Ashanti", district: "Kumasi Metro", category: "A", status: "Day/Boarding", gender: "Boys", type: "SHS", progs: ["BUS", "VIS. ARTS", "GEN. ARTS", "GEN. SCI", "STEM"] },
            { code: "0050108", name: "Prempeh College", region: "Ashanti", district: "Kumasi Metro", category: "A", status: "Day/Boarding", gender: "Boys", type: "SHS", progs: ["BUS", "VIS. ARTS", "GEN. ARTS", "GEN. SCI", "STEM"] },
            { code: "0050104", name: "T. I. Ahmadiyya Senior High, Kumasi", region: "Ashanti", district: "Kumasi Metro", category: "A", status: "Day/Boarding", gender: "Mixed", type: "SHS", progs: ["AGRIC", "BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            { code: "0050201", name: "Yaa Asantewaa Girls Senior High", region: "Ashanti", district: "Kumasi Metro", category: "A", status: "Day/Boarding", gender: "Girls", type: "SHS", progs: ["AGRIC", "BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            { code: "0030102", name: "Adisadel College", region: "Central", district: "Cape Coast Metro", category: "A", status: "Day/Boarding", gender: "Boys", type: "SHS", progs: ["BUS", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            { code: "0030103", name: "Holy Child School, Cape Coast", region: "Central", district: "Cape Coast Metro", category: "A", status: "Day/Boarding", gender: "Girls", type: "SHS", progs: ["BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            { code: "0030104", name: "Mfantsipim School", region: "Central", district: "Cape Coast Metro", category: "A", status: "Day/Boarding", gender: "Boys", type: "SHTS", progs: ["TECH", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            { code: "0030101", name: "St. Augustine's College, Cape Coast", region: "Central", district: "Cape Coast Metro", category: "A", status: "Day/Boarding", gender: "Boys", type: "SHS", progs: ["AGRIC", "BUS", "GEN. ARTS", "GEN. SCI"] },
            { code: "0030107", name: "Wesley Girls' High School, Cape Coast", region: "Central", district: "Cape Coast Metro", category: "A", status: "Day/Boarding", gender: "Girls", type: "SHS", progs: ["BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            { code: "0020402", name: "Okuapeman Senior High", region: "Eastern", district: "Akwapim North Municipal", category: "A", status: "Day/Boarding", gender: "Mixed", type: "SHS", progs: ["AGRIC", "BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            { code: "0020301", name: "Aburi Girls' Senior High", region: "Eastern", district: "Akwapim South", category: "A", status: "Day/Boarding", gender: "Girls", type: "SHS", progs: ["BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            { code: "0021003", name: "St. Peter's Senior High, Nkwatia", region: "Eastern", district: "Kwahu East", category: "A", status: "Day/Boarding", gender: "Boys", type: "SHS", progs: ["AGRIC", "BUS", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            { code: "0020102", name: "Pope John Snr. High & Min. Sem.", region: "Eastern", district: "New Juaben North Municipal", category: "A", status: "Day/Boarding", gender: "Boys", type: "SHS", progs: ["BUS", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            { code: "0010121", name: "Accra Academy", region: "Gt. Accra", district: "Accra Metro", category: "A", status: "Day/Boarding", gender: "Boys", type: "SHS", progs: ["AGRIC", "BUS", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            { code: "0010112", name: "Accra Girls Senior High", region: "Gt. Accra", district: "Ayawaso North Municipal", category: "A", status: "Day/Boarding", gender: "Girls", type: "SHS", progs: ["AGRIC", "BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            { code: "0010110", name: "Achimota Senior High", region: "Gt. Accra", district: "Okaikwei North Municipal", category: "A", status: "Day/Boarding", gender: "Mixed", type: "SHS", progs: ["AGRIC", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI", "STEM"] },
            { code: "0010111", name: "Presby Boys' Senior High, Legon", region: "Gt. Accra", district: "La Nkwantanang Madina", category: "A", status: "Day/Boarding", gender: "Boys", type: "SHS", progs: ["AGRIC", "BUS", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            { code: "0080101", name: "Tamale Senior High", region: "Northern", district: "Sagnerigu Municipal", category: "A", status: "Day/Boarding", gender: "Mixed", type: "SHTS", progs: ["AGRIC", "BUS", "TECH", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            { code: "0070102", name: "Mawuli School, Ho", region: "Volta", district: "Ho Municipal", category: "A", status: "Day/Boarding", gender: "Mixed", type: "SHTS", progs: ["AGRIC", "BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            { code: "0070101", name: "OLA Girls Senior High, Ho", region: "Volta", district: "Ho Municipal", category: "A", status: "Day/Boarding", gender: "Girls", type: "SHS", progs: ["BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            { code: "0040103", name: "Archbishop Porter Girls Snr. High", region: "Western", district: "Sekondi Takoradi Metro", category: "A", status: "Day/Boarding", gender: "Girls", type: "SHS", progs: ["BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            { code: "0040104", name: "Ghana Senior High/Tech", region: "Western", district: "Sekondi Takoradi Metro", category: "A", status: "Day/Boarding", gender: "Boys", type: "SHTS", progs: ["BUS", "TECH", "GEN. ARTS", "GEN. SCI"] }
        ];

        // Known exact details database for official GES 7-digit school codes
        const KNOWN_CODE_DETAILS = {
            "9060200": { name: "Yamfo Technical Institute", region: "Ahafo", district: "Tano North", category: "A", gender: "Mixed", type: "TVET", progs: ["TECH", "GEN. SCI", "BUS"] },
            "9050301": { name: "Otumfuo Osei Tutu II Technical Institute", region: "Ashanti", district: "Ejisu Municipal", category: "A", gender: "Mixed", type: "TVET", progs: ["TECH", "BUS"] },
            "9050101": { name: "Kumasi Tech. Inst.", region: "Ashanti", district: "Kumasi Metro", category: "A", gender: "Mixed", type: "TVET", progs: ["TECH"] },
            "9050103": { name: "Suame Technical Institute", region: "Ashanti", district: "Suame Municipal", category: "A", gender: "Mixed", type: "TVET", progs: ["TECH"] },
            "9061001": { name: "Dormaa Technical Institute", region: "Bono", district: "Dormaa Central Municipal", category: "A", gender: "Mixed", type: "TVET", progs: ["TECH"] },
            "9060901": { name: "Nkoranza Tech Inst.", region: "Bono East", district: "Nkoranza South", category: "A", gender: "Mixed", type: "TVET", progs: ["TECH"] },
            "9030401": { name: "Asuansi Tech. Inst.", region: "Central", district: "Abura/Asebu/Kwamankese", category: "A", gender: "Mixed", type: "TVET", progs: ["TECH"] },
            "9030701": { name: "Assin Foso Technical Institute", region: "Central", district: "Assin North", category: "A", gender: "Mixed", type: "TVET", progs: ["TECH"] },
            "9030101": { name: "Cape Coast Tech. Inst.", region: "Central", district: "Cape Coast Metro", category: "A", gender: "Mixed", type: "TVET", progs: ["TECH"] },
            "9030900": { name: "Winneba Technical Institute", region: "Central", district: "Effutu Municipal", category: "A", gender: "Mixed", type: "TVET", progs: ["TECH"] },
            "9030601": { name: "Panfokrom Technical Institute", region: "Central", district: "Gomoa East", category: "A", gender: "Mixed", type: "TVET", progs: ["TECH"] },
            "9030301": { name: "Biriwa Technical Institute", region: "Central", district: "Mfantsiman Mun", category: "A", gender: "Mixed", type: "TVET", progs: ["TECH"] },
            "9021101": { name: "Akwatia Tech. Inst.", region: "Eastern", district: "Denkyembour", category: "A", gender: "Mixed", type: "TVET", progs: ["TECH"] },
            "9021302": { name: "Kibi Technical Institute", region: "Eastern", district: "East Akim Municipal", category: "A", gender: "Mixed", type: "TVET", progs: ["TECH"] },
            "9021301": { name: "St. Paul's Tech. Inst.", region: "Eastern", district: "East Akim Municipal", category: "A", gender: "Mixed", type: "TVET", progs: ["TECH"] },
            "9021002": { name: "Abetifi Kyemase Technical Institute", region: "Eastern", district: "Kwahu East", category: "A", gender: "Mixed", type: "TVET", progs: ["TECH"] },
            "9020101": { name: "Koforidua Tech. Inst.", region: "Eastern", district: "New Juaben", category: "A", gender: "Mixed", type: "TVET", progs: ["TECH"] },
            "9020500": { name: "St. Mary's Technical Institute, Asamankese", region: "Eastern", district: "West Akim", category: "A", gender: "Mixed", type: "TVET", progs: ["TECH"] },
            "9010104": { name: "New Century Technical Institute", region: "Gt. Accra", district: "Ablekuma West Municipal", category: "A", gender: "Mixed", type: "TVET", progs: ["TECH"] },
            "9011601": { name: "Ada Tech. Inst.", region: "Gt. Accra", district: "Ada East", category: "A", gender: "Mixed", type: "TVET", progs: ["TECH"] },
            "9010105": { name: "Pilot Technical Institute", region: "Gt. Accra", district: "Ayawaso Central Municipal", category: "A", gender: "Mixed", type: "TVET", progs: ["TECH"] },
            "9010101": { name: "Accra Tech. Trg. Centre", region: "Gt. Accra", district: "Ayawaso South Municipal", category: "A", gender: "Mixed", type: "TVET", progs: ["TECH"] },
            "9010901": { name: "Madina Technical Institute", region: "Gt. Accra", district: "La Nkwantanang-Madina Municipal", category: "A", gender: "Mixed", type: "TVET", progs: ["TECH"] },
            "9010201": { name: "Tema Tech. Inst.", region: "Gt. Accra", district: "Tema Metro", category: "A", gender: "Mixed", type: "TVET", progs: ["TECH"] },
            "9010206": { name: "Tema Mission Technical Institute", region: "Gt. Accra", district: "Tema Metro", category: "A", gender: "Mixed", type: "TVET", progs: ["TECH"] },
            "9011400": { name: "East Legon Applied Technology Institute", region: "Gt. Accra", district: "Ayawaso West Municipal", category: "A", gender: "Mixed", type: "TVET", progs: ["TECH"] },
            "9080101": { name: "Dabokpa Voc/Tech. Inst.", region: "Northern", district: "Tamale Metro", category: "A", gender: "Mixed", type: "TVET", progs: ["TECH"] },
            "9090101": { name: "Bawku Tech. Inst.", region: "Upper East", district: "Bawku East", category: "A", gender: "Mixed", type: "TVET", progs: ["TECH"] },
            "9090401": { name: "Bolga Tech. Inst.", region: "Upper East", district: "Bolgatanga", category: "A", gender: "Mixed", type: "TVET", progs: ["TECH"] },
            "9100101": { name: "Wa Tech. Inst.", region: "Upper West", district: "Wa Municipal", category: "A", gender: "Mixed", type: "TVET", progs: ["TECH"] },
            "9070501": { name: "Anlo Tech. Inst.", region: "Volta", district: "Anloga Municipal", category: "A", gender: "Mixed", type: "TVET", progs: ["TECH"] },
            "9070601": { name: "Kpando Tech. Inst.", region: "Volta", district: "Kpando Municipal", category: "A", gender: "Mixed", type: "TVET", progs: ["TECH"] },
            "9040101": { name: "Takoradi Tech. Inst.", region: "Western", district: "Effia Kwesimitsim", category: "A", gender: "Mixed", type: "TVET", progs: ["TECH"] },
            "9040401": { name: "Kikam Tech. Inst.", region: "Western", district: "Ellembelle", category: "A", gender: "Mixed", type: "TVET", progs: ["TECH"] },
            "0061201": { name: "OLA Girls Senior High, Kenyasi", region: "Ahafo", district: "Asutifi North", category: "A", gender: "Girls", type: "SHS", progs: ["HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            "0060203": { name: "Serwaa Kesse Girls Senior High", region: "Ahafo", district: "Tano North", category: "A", gender: "Girls", type: "SHS", progs: ["AGRIC", "BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            "0050102": { name: "St. Louis Senior High, Kumasi", region: "Ashanti", district: "Oforikrom Municipal", category: "A", gender: "Girls", type: "SHS", progs: ["BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            "0050111": { name: "Kumasi High School", region: "Ashanti", district: "Kumasi Metro", category: "A", gender: "Boys", type: "SHS", progs: ["AGRIC", "BUS", "GEN. ARTS", "GEN. SCI"] },
            "0050110": { name: "Opoku Ware School", region: "Ashanti", district: "Kumasi Metro", category: "A", gender: "Boys", type: "SHS", progs: ["BUS", "VIS. ARTS", "GEN. ARTS", "GEN. SCI", "STEM"] },
            "0050108": { name: "Prempeh College", region: "Ashanti", district: "Kumasi Metro", category: "A", gender: "Boys", type: "SHS", progs: ["BUS", "VIS. ARTS", "GEN. ARTS", "GEN. SCI", "STEM"] },
            "0050104": { name: "T. I. Ahmadiyya Senior High, Kumasi", region: "Ashanti", district: "Kumasi Metro", category: "A", gender: "Mixed", type: "SHS", progs: ["AGRIC", "BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            "0050201": { name: "Yaa Asantewaa Girls Senior High", region: "Ashanti", district: "Kumasi Metro", category: "A", gender: "Girls", type: "SHS", progs: ["AGRIC", "BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            "0050502": { name: "St. Monica's Senior High, Mampong", region: "Ashanti", district: "Mampong Municipal", category: "A", gender: "Girls", type: "SHS", progs: ["AGRIC", "BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            "0051002": { name: "Konongo Odumase Senior High", region: "Ashanti", district: "Asante Akim Central Muni", category: "A", gender: "Mixed", type: "SHS", progs: ["AGRIC", "BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            "0060303": { name: "Berekum Presby Senior High", region: "Bono", district: "Berekum Municipal", category: "A", gender: "Mixed", type: "SHS", progs: ["AGRIC", "BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            "0060505": { name: "Our Lady of Providence Senior High", region: "Bono", district: "Jaman South", category: "A", gender: "Girls", type: "SHS", progs: ["BUS", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            "0060106": { name: "St. James Sem & Senior High, Abesim", region: "Bono", district: "Sunyani Municipal", category: "A", gender: "Boys", type: "SHS", progs: ["BUS", "GEN. ARTS", "GEN. SCI"] },
            "0060104": { name: "Sunyani Senior High", region: "Bono", district: "Sunyani Municipal", category: "A", gender: "Mixed", type: "SHS", progs: ["AGRIC", "BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI", "STEM"] },
            "0060107": { name: "Notre Dame Girls Senior High School, Sunyani", region: "Bono", district: "Sunyani West Municipal", category: "A", gender: "Girls", type: "SHS", progs: ["BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            "0030102": { name: "Adisadel College", region: "Central", district: "Cape Coast Metro", category: "A", gender: "Boys", type: "SHS", progs: ["BUS", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            "0030103": { name: "Holy Child School, Cape Coast", region: "Central", district: "Cape Coast Metro", category: "A", gender: "Girls", type: "SHS", progs: ["BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            "0030104": { name: "Mfantsipim School", region: "Central", district: "Cape Coast Metro", category: "A", gender: "Boys", type: "SHTS", progs: ["TECH", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            "0030101": { name: "St. Augustine's College, Cape Coast", region: "Central", district: "Cape Coast Metro", category: "A", gender: "Boys", type: "SHS", progs: ["AGRIC", "BUS", "GEN. ARTS", "GEN. SCI"] },
            "0030107": { name: "Wesley Girls' High School, Cape Coast", region: "Central", district: "Cape Coast Metro", category: "A", gender: "Girls", type: "SHS", progs: ["BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            "0030301": { name: "Mfantsiman Girls' Senior High", region: "Central", district: "Mfantsiman Mun", category: "A", gender: "Girls", type: "SHS", progs: ["AGRIC", "BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            "0020402": { name: "Okuapeman Senior High", region: "Eastern", district: "Akwapim North Municipal", category: "A", gender: "Mixed", type: "SHS", progs: ["AGRIC", "BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            "0020301": { name: "Aburi Girls' Senior High", region: "Eastern", district: "Akwapim South", category: "A", gender: "Girls", type: "SHS", progs: ["BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            "0021103": { name: "St. Rose's Senior High, Akwatia", region: "Eastern", district: "Denkyembour", category: "A", gender: "Girls", type: "SHS", progs: ["HOM. ECON.", "GEN. ARTS", "GEN. SCI"] },
            "0021302": { name: "Ofori Panin Senior High", region: "Eastern", district: "Abuakwa North Municipal", category: "A", gender: "Mixed", type: "SHS", progs: ["BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            "0021003": { name: "St. Peter's Senior High, Nkwatia", region: "Eastern", district: "Kwahu East", category: "A", gender: "Boys", type: "SHS", progs: ["AGRIC", "BUS", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            "0021501": { name: "Krobo Girls' Presby Senior High", region: "Eastern", district: "Lower Manya Krobo", category: "A", gender: "Girls", type: "SHS", progs: ["BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            "0020104": { name: "Ghana Senior High, Koforidua", region: "Eastern", district: "New Juaben North Municipal", category: "A", gender: "Mixed", type: "SHS", progs: ["AGRIC", "BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            "0020101": { name: "Koforidua Senior High/Tech", region: "Eastern", district: "New Juaben North Municipal", category: "A", gender: "Mixed", type: "SHTS", progs: ["TECH", "HOM. ECON.", "GEN. ARTS", "GEN. SCI"] },
            "0020102": { name: "Pope John Snr. High & Min. Sem., Koforidua", region: "Eastern", district: "New Juaben North Municipal", category: "A", gender: "Boys", type: "SHS", progs: ["BUS", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            "0010121": { name: "Accra Academy", region: "Gt. Accra", district: "Accra Metro", category: "A", gender: "Boys", type: "SHS", progs: ["AGRIC", "BUS", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            "0010112": { name: "Accra Girls Senior High", region: "Gt. Accra", district: "Ayawaso North Municipal", category: "A", gender: "Girls", type: "SHS", progs: ["AGRIC", "BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            "0010110": { name: "Achimota Senior High", region: "Gt. Accra", district: "Okaikwei North Municipal", category: "A", gender: "Mixed", type: "SHS", progs: ["AGRIC", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI", "STEM"] },
            "0010102": { name: "St. Mary's Senior High, Korle Gonno", region: "Gt. Accra", district: "Accra Metro", category: "A", gender: "Girls", type: "SHS", progs: ["BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            "0010105": { name: "St. Thomas Aquinas Senior High, Cantonments", region: "Gt. Accra", district: "La Dade-Kotopon Municipal", category: "A", gender: "Boys", type: "SHS", progs: ["AGRIC", "BUS", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            "0010111": { name: "Presby Boys' Senior High, Legon", region: "Gt. Accra", district: "La Nkwantanang-Madina Municipal", category: "A", gender: "Boys", type: "SHS", progs: ["AGRIC", "BUS", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            "0010201": { name: "Tema Senior High", region: "Gt. Accra", district: "Tema West Municipal", category: "A", gender: "Mixed", type: "SHS", progs: ["BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            "0080101": { name: "Tamale Senior High", region: "Northern", district: "Sagnerigu Municipal", category: "A", gender: "Mixed", type: "SHTS", progs: ["AGRIC", "BUS", "TECH", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            "0080107": { name: "St. Charles Senior High, Tamale", region: "Northern", district: "Tamale Metro", category: "A", gender: "Boys", type: "SHS", progs: ["AGRIC", "BUS", "GEN. ARTS", "GEN. SCI"] },
            "0080102": { name: "Ghana Senior High School, Tamale", region: "Northern", district: "Tamale Metro", category: "A", gender: "Mixed", type: "SHS", progs: ["AGRIC", "BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            "0090401": { name: "Bolga Girls Senior High", region: "Upper East", district: "Bolgatanga Municipal", category: "A", gender: "Girls", type: "SHS", progs: ["BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            "0090501": { name: "Navrongo Senior High", region: "Upper East", district: "Kasena-Nankani East Municipal", category: "A", gender: "Mixed", type: "SHS", progs: ["AGRIC", "BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            "0090505": { name: "Notre Dame Sem/ Senior High, Navrongo", region: "Upper East", district: "Kasena-Nankani East Municipal", category: "A", gender: "Boys", type: "SHS", progs: ["GEN. ARTS", "GEN. SCI"] },
            "0090403": { name: "Bolgatanga Senior High", region: "Upper East", district: "Talensi", category: "A", gender: "Mixed", type: "SHS", progs: ["AGRIC", "BUS", "HOM. ECON.", "VIS. ARTS", "GEN. ARTS", "GEN. SCI"] },
            "0100302": { name: "St. Francis Girls Senior High, Jirapa", region: "Upper West", district: "Jirapa", category: "A", gender: "Girls", type: "SHS", progs: ["BUS", "HOM. ECON.", "GEN. ARTS", "GEN. SCI"] },
            "0100202": { name: "Lawra Senior High", region: "Upper West", district: "Lawra", category: "A", gender: "Mixed", type: "SHS", progs: ["AGRIC", "BUS", "HOM. ECON.", "GEN. ARTS", "GEN. SCI"] },
            "0100201": { name: "Nandom Senior High", region: "Upper West", district: "Nandom", category: "A", gender: "Boys", type: "SHS", progs: ["AGRIC", "BUS", "GEN. ARTS", "GEN. SCI"] }
        };

        const FALLBACK_REGION_DATA = {
            "Ahafo": ["Asunafo North Municipal", "Asunafo South", "Asutifi North", "Asutifi South", "Tano North Municipal", "Tano South Municipal"],
            "Ashanti": ["Adansi Asokwa", "Adansi North", "Adansi South", "Afigya Kwabre North", "Afigya Kwabre South", "Ahafo Ano East Municipal", "Ahafo Ano North Municipal", "Ahafo Ano South East", "Ahafo Ano South West", "Akrofuom", "Amansie Central", "Amansie South", "Amansie West", "Asante Akim Central Municipal", "Asante Akim North", "Asante Akim South Municipal", "Asokwa Municipal", "Atwima Kwanwoma", "Atwima Mponua", "Atwima Nwabiagya North", "Atwima Nwabiagya Municipal", "Bekwai Municipal", "Bosome Freho", "Bosomtwe", "Ejisu Municipal", "Ejura Sekyedumase Municipal", "Juaben Municipal", "Kumasi Metropolitan", "Kwabre East Municipal", "Kwadaso Municipal", "Mampong Municipal", "Obuasi East", "Obuasi Municipal", "Offinso North", "Offinso Municipal", "Oforikrom Municipal", "Old Tafo Municipal", "Sekyere Afram Plains", "Sekyere Central", "Sekyere East", "Sekyere Kumawu", "Sekyere South", "Suame Municipal"],
            "Bono": ["Banda", "Berekum East Municipal", "Berekum West", "Dormaa Central Municipal", "Dormaa East", "Dormaa West", "Jaman North", "Jaman South Municipal", "Sunyani Municipal", "Sunyani West Municipal", "Tain", "Wenchi Municipal"],
            "Bono East": ["Atebubu-Amantin Municipal", "Kintampo North Municipal", "Kintampo South", "Nkoranza North", "Nkoranza South Municipal", "Pru East", "Pru West", "Sene East", "Sene West", "Techiman Municipal", "Techiman North"],
            "Central": ["Abura Asebu Kwamankese", "Agona East", "Agona West Municipal", "Ajumako Enyan Essiam", "Asikuma Odoben Brakwa", "Assin Central Municipal", "Assin North", "Assin South", "Awutu Senya East Municipal", "Awutu Senya West", "Cape Coast Metropolitan", "Effutu Municipal", "Ekumfi", "Gomoa Central", "Gomoa East", "Gomoa West", "Hemang Lower Denkyira", "Komenda Edina Eguafo Abrem Municipal", "Mfantseman Municipal", "Twifo Ati Morkwa", "Upper Denkyira East Municipal", "Upper Denkyira West"],
            "Eastern": ["Abuakwa North Municipal", "Abuakwa South Municipal", "Achiase", "Akuapem North Municipal", "Akuapem South", "Akyemansa", "Asene Manso Akroso", "Asuogyaman", "Atiwa East", "Atiwa West", "Ayensuano", "Birim Central Municipal", "Birim North", "Birim South", "Denkyembour", "Fanteakwa North", "Fanteakwa South", "Kwahu Afram Plains North", "Kwahu Afram Plains South", "Kwahu East", "Kwahu South", "Kwahu West Municipal", "Kwaebibirem Municipal", "Lower Manya Krobo Municipal", "New Juaben North Municipal", "New Juaben South Municipal", "Nsawam Adoagyiri Municipal", "Okere", "Suhum Municipal", "Upper Manya Krobo", "Upper West Akim", "West Akim Municipal", "Yilo Krobo Municipal"],
            "Greater Accra": ["Ablekuma Central Municipal", "Ablekuma North Municipal", "Ablekuma West Municipal", "Accra Metropolitan", "Ada East", "Ada West", "Adentan Municipal", "Ashaiman Municipal", "Ayawaso Central Municipal", "Ayawaso East Municipal", "Ayawaso North Municipal", "Ayawaso West Municipal", "Ga Central Municipal", "Ga East Municipal", "Ga North Municipal", "Ga South Municipal", "Ga West Municipal", "Korle Klottey Municipal", "Kpone Katamanso Municipal", "Krowor Municipal", "La Dade Kotopon Municipal", "La Nkwantanang Madina Municipal", "Ledzokuku Municipal", "Ningo Prampram", "Okaikwei North Municipal", "Shai Osudoku", "Tema Metropolitan", "Tema West Municipal", "Weija Gbawe Municipal"],
            "North East": ["Bunkpurugu Nakpanduri", "Chereponi", "East Mamprusi Municipal", "Mamprugu Moaduri", "West Mamprusi Municipal", "Yunyoo Nasuan"],
            "Northern": ["Gushiegu Municipal", "Karaga", "Kpandai", "Kumbungu", "Mion", "Nanton", "Nanumba North Municipal", "Nanumba South", "Saboba", "Sagnarigu Municipal", "Savelugu Municipal", "Tamale Metropolitan", "Tatale Sangule", "Tolon", "Yendi Municipal", "Zabzugu"],
            "Oti": ["Biakoye", "Guan", "Jasikan", "Kadjebi", "Krachi East Municipal", "Krachi Nchumuru", "Krachi West", "Nkwanta North", "Nkwanta South Municipal"],
            "Savannah": ["Bole", "Central Gonja", "East Gonja Municipal", "North Gonja", "North East Gonja", "Sawla Tuna Kalba", "West Gonja Municipal"],
            "Upper East": ["Bawku Municipal", "Bawku West", "Binduri", "Bolgatanga East", "Bolgatanga Municipal", "Bongo", "Builsa North Municipal", "Builsa South", "Garu", "Kassena Nankana Municipal", "Kassena Nankana West", "Nabdam", "Pusiga", "Talensi", "Tempane"],
            "Upper West": ["Daffiama Bussie Issa", "Jirapa Municipal", "Lambussie Karni", "Lawra Municipal", "Nadowli Kaleo", "Nandom Municipal", "Sissala East Municipal", "Sissala West", "Wa East", "Wa Municipal", "Wa West"],
            "Volta": ["Adaklu", "Afadjato South", "Agotime Ziope", "Akatsi North", "Akatsi South Municipal", "Anloga", "Central Tongu", "Ho Municipal", "Ho West", "Hohoe Municipal", "Keta Municipal", "Ketu North Municipal", "Ketu South Municipal", "Kpando Municipal", "North Dayi", "North Tongu", "South Dayi", "South Tongu"],
            "Western": ["Ahanta West Municipal", "Amenfi Central", "Amenfi East Municipal", "Amenfi West Municipal", "Effia Kwesimintim Municipal", "Ellembelle", "Jomoro Municipal", "Mpohor", "Nzema East Municipal", "Prestea Huni Valley Municipal", "Sekondi Takoradi Metropolitan", "Shama", "Tarkwa Nsuaem Municipal", "Wassa East"],
            "Western North": ["Aowin Municipal", "Bia East", "Bia West", "Bibiani Anhwiaso Bekwai Municipal", "Bodi", "Juaboso", "Sefwi Akontombra", "Sefwi Wiawso Municipal", "Suaman"]
        };

        const REGION_LIST = Object.keys(FALLBACK_REGION_DATA).sort();

        // Standard list of all available GES programmes for dropdown selections
        const ALL_GES_PROGRAMMES = [
            "GEN. SCI",
            "GEN. ARTS",
            "BUS",
            "HOM. ECON.",
            "VIS. ARTS",
            "AGRIC",
            "TECH",
            "STEM"
        ];

        // Application State & Manager
        class BECEApp {
            constructor() {
                this.schools = [...PRELOADED_SCHOOLS].map(s => ({
                    ...s,
                    location: s.location || this.buildLocationLabel(s.region, s.district)
                }));
                this._pdfParsedSchools = null;
                this._excelParsedSchools = null;
                this.datasetPreference = 'EXCEL';
                this.datasetSchoolCount = 0;
                this.selectedChoices = [];
                this.activeModalRankIndex = -1;
                this._isInitializing = false;
                this.parseLogger = window.SchoolParsingLogger ? window.SchoolParsingLogger.createLogger('BECEApp') : { info() {}, warn() {}, error() {}, clear() {}, snapshot() { return { events: [], errors: [] }; } };
                this.parseLog = [];
                this.parseErrors = [];
                this.grades = { eng: 1, math: 1, sci: 1, soc: 1, ict: 1, bdt: 1, rme: 1, gh: 1, cad: 1 };
                this.computedAggregate = 6;
                this.manualAggregateOverride = null;
                this.cutoffThresholds = { A: 18, B: 28, C: 40 };
                this.debugLog = [];
                this.regionData = FALLBACK_REGION_DATA;
                this.districtNeighborMap = {};
                this.regionNeighborMap = {};
                this.defaultRegisterUrlXlsx = './scripts/FINAL%202026%20SENIOR%20HIGH%20SCHOOL%20REGISTER.xlsx';
                this.defaultRegisterUrlPdf = './scripts/FINAL%202026%20SENIOR%20HIGH%20SCHOOL%20REGISTER.pdf';
                this.programmesUrl = './data/programmes.json';
                this.programmeDefinitions = null;
                this._restoredProgramSelections = null;
                this.pairingEngine = new window.SchoolPairingEngine(this);
                this.dbViewerPage = 1;
                this.dbViewerSortKey = 'name';
                this.dbViewerSortDir = 'asc';
                this.dbViewerFilteredList = [];
            }

            // Persistence: save/load user state (selected choices and form inputs)
            saveStateToStorage() {
                try {
                    const trackElem = document.getElementById('cand-track');
                    const programContainer = document.getElementById('cand-program');
                    const candNameElem = document.getElementById('cand-student-name');
                    const candIndexElem = document.getElementById('cand-student-index');
                    if (candNameElem) this.studentName = candNameElem.value;
                    if (candIndexElem) this.studentIndex = candIndexElem.value;
                    const saved = {
                        studentName: this.studentName || '',
                        studentIndex: this.studentIndex || '',
                        selectedChoices: (this.selectedChoices || []).map(s => ({ code: s.code, prog: s.prog, res: s.res })),
                        region: document.getElementById('cand-region') ? document.getElementById('cand-region').value : '',
                        district: document.getElementById('cand-district') ? document.getElementById('cand-district').value : '',
                        locality: document.getElementById('cand-locality') ? document.getElementById('cand-locality').value : '',
                        program: programContainer ? Array.from(programContainer.querySelectorAll('input[type="checkbox"][data-filter-item]')).filter(input => input.checked).map(input => input.value) : [],
                        tracks: trackElem ? Array.from(trackElem.querySelectorAll('input[type="checkbox"][data-filter-item]')).filter(input => input.checked).map(input => input.value) : [],
                        genders: this.getSelectedGenderValues(),
                        manualAggregateOverride: this.manualAggregateOverride,
                        cutoffThresholds: this.cutoffThresholds,
                        grades: this.grades
                    };
                    saved.datasetPreference = this.datasetPreference === 'PDF' ? 'PDF' : 'EXCEL';
                    localStorage.setItem('bece_app_state', JSON.stringify(saved));
                } catch (err) {
                    console.warn('Unable to save state', err);
                }
            }

            loadStateFromStorage() {
                try {
                    const raw = localStorage.getItem('bece_app_state');
                    if (!raw) return false;
                    const parsed = JSON.parse(raw);
                    if (parsed.studentName) {
                        this.studentName = parsed.studentName;
                        const elem = document.getElementById('cand-student-name');
                        if (elem) elem.value = parsed.studentName;
                    }
                    if (parsed.studentIndex) {
                        this.studentIndex = parsed.studentIndex;
                        const elem = document.getElementById('cand-student-index');
                        if (elem) elem.value = parsed.studentIndex;
                    }
                    // restore simple fields
                    if (parsed.region && document.getElementById('cand-region')) document.getElementById('cand-region').value = parsed.region;
                    if (parsed.district) {
                        this._restoredDistrict = parsed.district;
                    }
                    if (parsed.locality && document.getElementById('cand-locality')) document.getElementById('cand-locality').value = parsed.locality;
                    if (parsed.tracks && document.getElementById('cand-track')) {
                        const trackContainer = document.getElementById('cand-track');
                        trackContainer.querySelectorAll('input[type="checkbox"][data-filter-item]').forEach(input => {
                            input.checked = parsed.tracks.includes(input.value);
                        });
                    }
                    if (parsed.program) {
                        this._restoredProgramSelections = Array.isArray(parsed.program) ? parsed.program : [parsed.program];
                    }
                    if (Array.isArray(parsed.genders)) {
                        // set gender checkboxes
                        document.querySelectorAll('#cand-gender-group input[type="checkbox"]').forEach(box => {
                            box.checked = parsed.genders.includes(box.value);
                        });
                    }
                    if (typeof parsed.manualAggregateOverride !== 'undefined' && parsed.manualAggregateOverride !== null) {
                        this.manualAggregateOverride = parsed.manualAggregateOverride;
                    }
                    if (parsed.cutoffThresholds) this.cutoffThresholds = parsed.cutoffThresholds;
                    if (parsed.grades) this.grades = parsed.grades;

                    if (parsed.datasetPreference && document.getElementById('dataset-select')) {
                        this.datasetPreference = parsed.datasetPreference.toUpperCase() === 'PDF' ? 'PDF' : 'EXCEL';
                        document.getElementById('dataset-select').value = this.datasetPreference;
                    }

                    // restore selectedChoices by code
                    return true;
                } catch (err) {
                    console.warn('Unable to load saved state', err);
                    return false;
                }
            }

            attachMultiSelectToggle(selectId) {
                const select = document.getElementById(selectId);
                if (!select) return;
                const toggleOption = (event) => {
                    const target = event.target;
                    if (!(target instanceof HTMLOptionElement)) return;
                    event.preventDefault();
                    target.selected = !target.selected;
                    select.dispatchEvent(new Event('change', { bubbles: true }));
                };
                select.addEventListener('pointerdown', toggleOption);
                select.addEventListener('mousedown', toggleOption);
            }

            attachMultiSelectToggles() {
                const multiSelectIds = [
                    'modal-cat-filter',
                    'modal-res-filter',
                    'modal-region-filter',
                    'modal-district-filter',
                    'modal-programme-filter',
                    'modal-gender-filter',
                    'modal-type-filter',
                ];
                multiSelectIds.forEach(id => this.attachMultiSelectToggle(id));
            }

            saveModalFilterSelections() {
                this.modalFilterSelections = this.modalFilterSelections || {};
                ['modal-cat-filter', 'modal-res-filter', 'modal-region-filter', 'modal-district-filter', 'modal-programme-filter', 'modal-gender-filter', 'modal-type-filter']
                    .forEach(selectId => {
                        this.modalFilterSelections[selectId] = this.getSelectedFilterValues(selectId);
                    });
            }

            updateModalSelectAllCheckbox(selectId, checkboxId) {
                const container = document.getElementById(selectId);
                const checkbox = document.getElementById(checkboxId);
                if (!container || !checkbox) return;

                let items = [];
                if (container.tagName === 'SELECT') {
                    items = Array.from(container.options);
                    checkbox.checked = items.length > 0 && items.filter(o => o.selected).length === items.length;
                    checkbox.indeterminate = items.some(o => o.selected) && !checkbox.checked;
                    return;
                }

                items = Array.from(container.querySelectorAll('input[type="checkbox"][data-filter-item]'));
                checkbox.checked = items.length > 0 && items.every(input => input.checked);
                checkbox.indeterminate = items.some(input => input.checked) && !checkbox.checked;
            }

            toggleModalFilterSelectAll(selectId, checkboxId) {
                const container = document.getElementById(selectId);
                const checkbox = document.getElementById(checkboxId);
                if (!container || !checkbox) return;

                if (container.tagName === 'SELECT') {
                    Array.from(container.options).forEach(option => option.selected = checkbox.checked);
                } else {
                    Array.from(container.querySelectorAll('input[type="checkbox"][data-filter-item]'))
                        .forEach(input => input.checked = checkbox.checked);
                }

                this.saveModalFilterSelections();
                this.filterModalList();
            }

            openModalFilterPanel(filterId) {
                const titleMap = {
                    'modal-cat-filter': 'Categories',
                    'modal-res-filter': 'Residence',
                    'modal-region-filter': 'Regions',
                    'modal-district-filter': 'Districts',
                    'modal-programme-filter': 'Programmes',
                    'modal-gender-filter': 'Gender',
                    'modal-type-filter': 'School Types',
                };
                const overlay = document.getElementById('modal-filter-popover');
                const title = document.getElementById('modal-filter-popover-title');
                const subtitle = document.getElementById('modal-filter-popover-subtitle');
                if (!overlay || !title || !subtitle) return;

                this.filterModalList();
                const panes = Array.from(document.querySelectorAll('.modal-filter-pane'));
                panes.forEach(p => p.classList.add('hidden'));

                const activePane = document.getElementById(`${filterId}-pane`);
                if (activePane) {
                    activePane.classList.remove('hidden');
                }

                title.textContent = titleMap[filterId] || 'Filter';
                subtitle.textContent = `Choose ${titleMap[filterId] || 'options'} to refine the school list.`;
                overlay.classList.remove('hidden');
            }

            closeModalFilterPopover() {
                const overlay = document.getElementById('modal-filter-popover');
                if (!overlay) return;
                overlay.classList.add('hidden');
            }

            handleFilterPopoverOutsideClick(event) {
                if (event.target.id === 'modal-filter-popover') {
                    this.closeModalFilterPopover();
                }
            }

            updateModalFilterButtonBadges() {
                const buttonIds = ['modal-cat-filter', 'modal-res-filter', 'modal-region-filter', 'modal-district-filter', 'modal-programme-filter', 'modal-gender-filter', 'modal-type-filter'];
                buttonIds.forEach(id => {
                    const badge = document.getElementById(`${id}-badge`);
                    if (!badge) return;
                    const selected = this.getSelectedFilterValues(id);
                    if (selected.length === 0) {
                        badge.textContent = 'All';
                    } else if (selected.length === 1) {
                        badge.textContent = selected[0];
                    } else {
                        badge.textContent = `${selected.length} selected`;
                    }
                });
            }

            normalizeText(value) {
                return (value || '')
                    .toString()
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, ' ')
                    .replace(/\bmetro\b|\bmetropolitan\b/g, 'metro')
                    .replace(/\bmunicipality\b|\bmunicipal\b|\bmun\b/g, 'municipal')
                    .replace(/\bdistrict\b/g, 'district')
                    .replace(/\s+/g, ' ')
                    .trim();
            }

            normalizeResidenceStatus(value) {
                if (value === null || value === undefined) return null;
                const cleaned = String(value)
                    .toLowerCase()
                    .replace(/[^a-z/ ]/g, ' ')
                    .replace(/\s+/g, ' ')
                    .trim();

                if (!cleaned) return null;
                if (/(day\s*\/\s*boarding|dayboarding|day and boarding)/.test(cleaned)) return 'Day/Boarding';
                if (/\bday only\b/.test(cleaned)) return 'Day';
                if (/\bboarding only\b/.test(cleaned)) return 'Boarding';
                if (/\bday\b/.test(cleaned) && !/\bboarding\b/.test(cleaned)) return 'Day';
                if (/\bboarding\b/.test(cleaned) && !/\bday\b/.test(cleaned)) return 'Boarding';
                return null;
            }

            normalizeLocationKey(value) {
                return this.normalizeText(value);
            }

            canonicalRegionName(region) {
                if (!region) return '';
                const normalized = region.toString().trim();
                if (/^gt\.?\s*accra$/i.test(normalized)) return 'Greater Accra';
                return normalized;
            }

            initializeModalFilterCollapsibles() {
                const panels = Array.from(document.querySelectorAll('.filter-panel'));
                panels.forEach(panel => {
                    const toggle = panel.querySelector('.filter-panel-toggle');
                    const content = panel.querySelector('.filter-panel-content');
                    if (!toggle || !content) return;

                    // Start panels expanded by default. Use 'none' so height isn't fixed
                    // (useful if modal was initialized while hidden, avoiding zero scrollHeight)
                    content.style.maxHeight = 'none';
                    content.style.overflow = 'visible';
                    toggle.setAttribute('aria-expanded', 'true');

                    const icon = toggle.querySelector('i');
                    if (icon) icon.classList.toggle('fa-rotate-180', true);
                    toggle.removeAttribute('data-pinned');

                    // Remove hover-based expand/collapse
                    panel.onmouseenter = null;
                    panel.onmouseleave = null;

                    // Allow manual toggle via click: expand/collapse and update aria/pinned state
                    toggle.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
                        if (isExpanded) {
                            // collapse immediately
                            content.style.maxHeight = `${content.scrollHeight}px`;
                            // force reflow then collapse for a smoother transition
                            void content.offsetHeight;
                            content.style.maxHeight = '0px';
                            content.style.overflow = 'hidden';
                            toggle.setAttribute('aria-expanded', 'false');
                            if (icon) icon.classList.toggle('fa-rotate-180', false);
                            toggle.setAttribute('data-pinned', 'false');
                        } else {
                            // expand: set to measured px then release to 'none' after transition
                            const measured = content.scrollHeight;
                            content.style.maxHeight = `${measured}px`;
                            content.style.overflow = 'visible';
                            toggle.setAttribute('aria-expanded', 'true');
                            if (icon) icon.classList.toggle('fa-rotate-180', true);
                            toggle.setAttribute('data-pinned', 'true');
                            // after transition, allow automatic height
                            setTimeout(() => {
                                // only set to none if still expanded
                                if (toggle.getAttribute('aria-expanded') === 'true') {
                                    content.style.maxHeight = 'none';
                                }
                            }, 220);
                        }
                    });
                });
            }

            buildNeighborLookup(mapData) {
                const normalized = {};
                for (const key in mapData) {
                    const keyNorm = this.normalizeLocationKey(key);
                    normalized[keyNorm] = (mapData[key] || []).map(item => this.normalizeLocationKey(item));
                }
                return normalized;
            }

            async loadNeighborMaps() {
                try {
                    const [regionResponse, districtResponse] = await Promise.all([
                        fetch('./scripts/ghana_regions_neighbours.json'),
                        fetch('./scripts/ghana_district_neighbors.json')
                    ]);

                    if (regionResponse.ok) {
                        const regionData = await regionResponse.json();
                        this.regionNeighborMap = this.buildNeighborLookup(regionData);
                    }

                    if (districtResponse.ok) {
                        const districtData = await districtResponse.json();
                        this.districtNeighborMap = this.buildNeighborLookup(districtData);
                    }
                } catch (err) {
                    console.warn('Unable to load neighbor maps, using default proximity behavior.', err);
                    this.regionNeighborMap = {};
                    this.districtNeighborMap = {};
                }
            }

            normalizeRegion(region) {
                return region === 'Greater Accra' ? 'Gt. Accra' : region;
            }

            buildLocationLabel(region, district) {
                const regionName = this.normalizeRegion(region || '');
                if (!district || district === 'District Central') {
                    return regionName || 'Unknown location';
                }
                return `${district}, ${regionName}`.replace(/, $/, '').trim();
            }

            inferDistrict(snippet, currentRegion, regionDistricts) {
                const normalizedSnippet = this.normalizeText(snippet);
                let district = 'District Central';
                let location = this.buildLocationLabel(currentRegion, district);

                for (let candidate of regionDistricts) {
                    const normalizedCandidate = this.normalizeText(candidate);
                    if (normalizedSnippet.includes(normalizedCandidate)) {
                        district = candidate;
                        location = this.buildLocationLabel(currentRegion, district);
                        break;
                    }

                    const compactCandidate = normalizedCandidate.replace(/\bmunicipal\b|\bdistrict\b|\bmetro\b/g, '').trim();
                    if (compactCandidate && normalizedSnippet.includes(compactCandidate)) {
                        district = candidate;
                        location = this.buildLocationLabel(currentRegion, district);
                        break;
                    }
                }

                return { district, location };
            }

            async init() {
                this._isInitializing = true;
                if (document.getElementById('cand-region') && document.getElementById('cand-district')) {
                    await this.loadRegionOptions();
                }
                this.attachMultiSelectToggles();
                this.initializeModalFilterCollapsibles();
                this.updateModalFilterButtonBadges();
                this.setupFilterOutsideClickListeners();
                // restore saved user preferences first so dataset preference can affect load order
                const restored = this.loadStateFromStorage();
                await this.loadDefaultRegister();
                await this.ensurePreferredDatasetLoaded();
                // when restoring state, don't trigger automatic regeneration from region change
                if (document.getElementById('cand-region') && document.getElementById('cand-district')) {
                    this.onRegionChange(restored === true);
                }
                this.updateDesiredProgramOptions();
                this.restoreSavedProgramSelections();
                this.syncCutoffInputs();
                this.calculateGrades();
                this.updateCountDisplay();
                this._isInitializing = false;
                this.clearAndResetPairings();
            }

            toggleDbViewerFilterSection(event) {
                if (event) event.stopPropagation();
                const body = document.getElementById('db-viewer-filter-body');
                const chevron = document.getElementById('db-viewer-filter-chevron');
                if (!body) return;
                const isHidden = body.classList.contains('hidden');
                if (isHidden) {
                    body.classList.remove('hidden');
                    if (chevron) chevron.classList.add('rotate-180');
                } else {
                    body.classList.add('hidden');
                    if (chevron) chevron.classList.remove('rotate-180');
                }
            }

            collapseDbViewerFilterSection() {
                const body = document.getElementById('db-viewer-filter-body');
                const chevron = document.getElementById('db-viewer-filter-chevron');
                if (body) body.classList.add('hidden');
                if (chevron) chevron.classList.remove('rotate-180');
            }

            togglePickerModalFilterSection(event) {
                if (event) event.stopPropagation();
                const body = document.getElementById('picker-modal-filter-body');
                const chevron = document.getElementById('picker-modal-filter-chevron');
                if (!body) return;
                const isHidden = body.classList.contains('hidden');
                if (isHidden) {
                    body.classList.remove('hidden');
                    if (chevron) chevron.classList.add('rotate-180');
                } else {
                    body.classList.add('hidden');
                    if (chevron) chevron.classList.remove('rotate-180');
                }
            }

            collapsePickerModalFilterSection() {
                const body = document.getElementById('picker-modal-filter-body');
                const chevron = document.getElementById('picker-modal-filter-chevron');
                if (body) body.classList.add('hidden');
                if (chevron) chevron.classList.remove('rotate-180');
            }

            setupFilterOutsideClickListeners() {
                document.addEventListener('click', (event) => {
                    // 1. Db Viewer Filter container outside click
                    const dbContainer = document.getElementById('db-viewer-filter-container');
                    const dbBody = document.getElementById('db-viewer-filter-body');
                    if (dbContainer && dbBody && !dbBody.classList.contains('hidden')) {
                        if (!dbContainer.contains(event.target)) {
                            this.collapseDbViewerFilterSection();
                        }
                    }

                    // 2. Picker Modal Filter container outside click
                    const pickerContainer = document.getElementById('picker-modal-filter-container');
                    const pickerBody = document.getElementById('picker-modal-filter-body');
                    const popover = document.getElementById('modal-filter-popover');
                    const isPopoverVisible = popover && !popover.classList.contains('hidden');
                    if (pickerContainer && pickerBody && !pickerBody.classList.contains('hidden')) {
                        if (!pickerContainer.contains(event.target) && (!isPopoverVisible || !popover.contains(event.target))) {
                            this.collapsePickerModalFilterSection();
                        }
                    }
                });
            }

            async loadRegionOptions() {
                const regionSelect = document.getElementById('cand-region');
                const districtSelect = document.getElementById('cand-district');

                if (!regionSelect || !districtSelect) return;

                regionSelect.innerHTML = '<option value="">Loading regions...</option>';
                districtSelect.innerHTML = '<option value="">Loading districts...</option>';

                try {
                    const response = await fetch('./scripts/regions-districts.json');
                    if (!response.ok) throw new Error(`Unable to load regions file (${response.status})`);
                    const data = await response.json();
                    this.regionData = data && typeof data === 'object' ? data : FALLBACK_REGION_DATA;
                } catch (error) {
                    console.warn('Using fallback regions data:', error);
                    this.regionData = FALLBACK_REGION_DATA;
                }

                await this.loadNeighborMaps();

                const regionNames = Object.keys(this.regionData).sort();
                regionSelect.innerHTML = '';

                regionNames.forEach(region => {
                    const option = document.createElement('option');
                    option.value = region;
                    option.textContent = region;
                    regionSelect.appendChild(option);
                });

                if (!regionSelect.value && regionNames.length) {
                    regionSelect.value = regionNames[0];
                }
            }

            updateCountDisplay() {
                const schoolCountTag = document.getElementById('school-count-tag');
                const badgeCountText = document.getElementById('badge-count-text');
                const activeCount = this.schools ? this.schools.length : 0;
                const loadedCount = this.datasetSchoolCount || activeCount;

                if (schoolCountTag) {
                    schoolCountTag.textContent = activeCount === loadedCount ? `${loadedCount} Schools` : `${activeCount} Active / ${loadedCount} Loaded`;
                }
                if (badgeCountText) {
                    badgeCountText.textContent = `${loadedCount} Schools Loaded`;
                }
            }

            onRegionChange(suppressGenerate = false) {
                const regionSelect = document.getElementById('cand-region');
                const distSelect = document.getElementById('cand-district');
                if (!regionSelect || !distSelect) return;

                const reg = regionSelect.value;
                distSelect.innerHTML = '';

                const dists = (this.regionData && this.regionData[reg] ? this.regionData[reg] : ["District Central"]).slice();
                dists.forEach(d => {
                    const opt = document.createElement('option');
                    opt.value = d;
                    opt.textContent = d;
                    distSelect.appendChild(opt);
                });

                if (this._restoredDistrict && dists.includes(this._restoredDistrict)) {
                    distSelect.value = this._restoredDistrict;
                    this._restoredDistrict = null;
                } else if (!distSelect.value && dists.length) {
                    distSelect.value = dists[0];
                }

                if (!suppressGenerate && !this._isInitializing) this.recalculate();
            }

            selectGrade(button) {
                const subject = button.getAttribute('data-subject');
                const value = button.getAttribute('data-value');
                if (!subject || !value) return;

                this.grades[subject] = parseInt(value, 10) || 1;
                this.syncGradeSelectionUI();
                this.calculateGrades();

                const manualInput = document.getElementById('manual-aggregate-input');
                if (manualInput && !manualInput.value.trim()) {
                    this.manualAggregateOverride = this.computedAggregate;
                    this.updateAggregateDisplay();
                    this.saveStateToStorage();
                }
            }

            applyAggregateOverride() {
                const input = document.getElementById('manual-aggregate-input');
                const rawValue = input ? input.value.trim() : '';

                if (!rawValue) {
                    this.manualAggregateOverride = null;
                    this.calculateGrades();
                    return;
                }

                const parsedValue = parseInt(rawValue, 10);
                if (Number.isNaN(parsedValue)) {
                    return;
                }

                this.manualAggregateOverride = parsedValue;
                this.computedAggregate = parsedValue;
                this.updateAggregateDisplay();
                this.clearAndResetPairings();
                this.saveStateToStorage();
            }

            syncCutoffInputs() {
                const catAInput = document.getElementById('cutoff-cat-a');
                const catBInput = document.getElementById('cutoff-cat-b');
                const catCInput = document.getElementById('cutoff-cat-c');
                if (catAInput) catAInput.value = this.cutoffThresholds.A;
                if (catBInput) catBInput.value = this.cutoffThresholds.B;
                if (catCInput) catCInput.value = this.cutoffThresholds.C;
            }

            syncCutoffThresholds() {
                const catAInput = document.getElementById('cutoff-cat-a');
                const catBInput = document.getElementById('cutoff-cat-b');
                const catCInput = document.getElementById('cutoff-cat-c');

                this.cutoffThresholds = {
                    A: parseInt(catAInput?.value || this.cutoffThresholds.A, 10) || this.cutoffThresholds.A,
                    B: parseInt(catBInput?.value || this.cutoffThresholds.B, 10) || this.cutoffThresholds.B,
                    C: parseInt(catCInput?.value || this.cutoffThresholds.C, 10) || this.cutoffThresholds.C
                };

                this.clearAndResetPairings();
                this.saveStateToStorage();
            }

            syncGradeSelectionUI() {
                document.querySelectorAll('.grade-option').forEach(button => {
                    const subject = button.getAttribute('data-subject');
                    const selectedValue = this.grades[subject] || 1;
                    const isSelected = Number(button.getAttribute('data-value')) === Number(selectedValue);

                    button.className = `grade-option rounded-lg border px-2 py-1 font-semibold transition ${isSelected
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-300 hover:border-emerald-400 hover:bg-emerald-50'}`;
                });
            }

            updateAggregateDisplay() {
                const aggElem = document.getElementById('computed-aggregate');
                const manualInput = document.getElementById('manual-aggregate-input');
                const effectiveAggregate = this.manualAggregateOverride !== null ? this.manualAggregateOverride : this.computedAggregate;

                if (manualInput) {
                    manualInput.value = this.manualAggregateOverride !== null ? this.manualAggregateOverride : '';
                }

                if (aggElem) {
                    aggElem.textContent = `Aggregate: ${effectiveAggregate.toString().padStart(2, '0')}`;
                    if (effectiveAggregate <= 10) {
                        aggElem.className = "px-3 py-1 bg-emerald-100 text-emerald-800 rounded-lg text-xs font-bold border border-emerald-300";
                    } else if (effectiveAggregate <= 18) {
                        aggElem.className = "px-3 py-1 bg-blue-100 text-blue-800 rounded-lg text-xs font-bold border border-blue-300";
                    } else if (effectiveAggregate <= 28) {
                        aggElem.className = "px-3 py-1 bg-amber-100 text-amber-800 rounded-lg text-xs font-bold border border-amber-300";
                    } else {
                        aggElem.className = "px-3 py-1 bg-rose-100 text-rose-800 rounded-lg text-xs font-bold border border-rose-300";
                    }
                }
            }

            calculateGrades() {
                this.syncGradeSelectionUI();

                const coreSum = this.grades.eng + this.grades.math + this.grades.sci + this.grades.soc;
                const electives = [this.grades.ict, this.grades.bdt, this.grades.rme, this.grades.gh, this.grades.cad].sort((a,b) => a - b);
                const best2Electives = electives[0] + electives[1];
                this.computedAggregate = coreSum + best2Electives;

                if (this.manualAggregateOverride !== null) {
                    this.computedAggregate = this.manualAggregateOverride;
                }

                this.updateAggregateDisplay();
                if (!this._isInitializing) {
                    this.clearAndResetPairings();
                }
            }

            getSelectedGenderValues() {
                const boxes = Array.from(document.querySelectorAll('#cand-gender-group input[type="checkbox"]:checked'));
                const radios = Array.from(document.querySelectorAll('#cand-gender-group input[type="radio"]:checked'));
                const selected = [...boxes, ...radios];
                const values = selected.map(input => input.value);
                return values.length > 0 ? values : ['Mixed'];
            }

            getSelectedGenderLabel() {
                const values = this.getSelectedGenderValues();
                if (values.includes('Mixed')) return 'Mixed';
                return values.map(value => value === 'Males' ? 'Males' : value === 'Females' ? 'Females' : value).join(', ');
            }

            sortSchoolsByLiveScore(schools, selectedProg, selectedDistrict, selectedRegion, userLocality, strategy) {
                return [...schools].sort((a, b) => {
                    return this.scoreSchoolForSelection(b, selectedProg, selectedDistrict, selectedRegion, userLocality, strategy)
                        - this.scoreSchoolForSelection(a, selectedProg, selectedDistrict, selectedRegion, userLocality, strategy);
                });
            }

            schoolMatchesSelectedGender(school, selectedGenders) {
                if (!selectedGenders || selectedGenders.length === 0) return true;
                if (selectedGenders.includes('Mixed')) return true;

                const allowedGenders = new Set(selectedGenders.map(value => {
                    if (value === 'Males') return 'Boys';
                    if (value === 'Females') return 'Girls';
                    return value;
                }));

                return school.gender === 'Mixed' || allowedGenders.has(school.gender);
            }

            getSchoolProgramNames(school) {
                const details = Array.isArray(school && school.programNames) ? school.programNames : [];
                const broad = Array.isArray(school && school.progs) ? school.progs : [];
                const names = [];
                for (const value of [...details, ...broad]) {
                    const text = String(value || '').trim();
                    if (text && !names.includes(text)) names.push(text);
                }
                if (names.length) return names;

                const definitions = this.programmeDefinitions && this.programmeDefinitions.programmes ? this.programmeDefinitions.programmes : [];
                return [...new Set((school && school.progs || []).map(value => {
                    const definition = definitions.find(item => item.canonical === value);
                    return definition ? definition.display : value;
                }).filter(Boolean))];
            }

            canonicalizeProgrammeValue(value) {
                const entry = this.resolveProgrammeEntry(value);
                if (entry && entry.canonical) return entry.canonical;
                const normalized = String(value || '').trim().toUpperCase();
                const definitions = this.programmeDefinitions || { programmes: [], expandedPrograms: [] };
                const match = [...(definitions.programmes || []), ...(definitions.expandedPrograms || [])].find(item =>
                    String(item.display || '').trim().toUpperCase() === normalized ||
                    String(item.canonical || '').trim().toUpperCase() === normalized
                );
                return match ? match.canonical : value;
            }

            inferDetailedProgrammeGroup(code) {
                const numeric = parseInt(String(code || '').trim(), 10);
                if (!Number.isFinite(numeric)) return '';
                if (numeric >= 600 && numeric < 700) return 'ENGINEERING TRADES';
                if (numeric >= 700 && numeric < 900) return 'BUILDING TRADES';
                if (numeric >= 900 && numeric < 1000) return 'BUSINESS';
                return '';
            }

            getTradeGroupDefaultCode(groupName) {
                const normalizedGroup = String(groupName || '').trim().toUpperCase();
                if (normalizedGroup === 'ENGINEERING TRADES') return '601';
                if (normalizedGroup === 'BUILDING TRADES') return '701';
                if (normalizedGroup === 'BUSINESS') return '901';
                return '';
            }

            getDefaultProgrammeCode(canonical) {
                const normalized = String(canonical || '').trim().toUpperCase();
                const aliases = {
                    AGRIC: '101',
                    AGRICULTURE: '101',
                    AGRICULTURAL: '101',
                    'AGRICULTURAL SCIENCE': '101',
                    BUS: '201',
                    BUSINESS: '201',
                    TECH: '301',
                    TECHNICAL: '301',
                    'TECHNICAL PROGRAMMES': '301',
                    TVET: '301',
                    VOCATIONAL: '301',
                    'HOM. ECON.': '401',
                    'HOME ECONOMICS': '401',
                    'HOME ECON': '401',
                    'VIS. ARTS': '402',
                    'VISUAL ARTS': '402',
                    'GEN. ARTS': '501',
                    'GENERAL ARTS': '501',
                    'LANGUAGES': '504',
                    'GEN. SCI': '502',
                    'GENERAL SCIENCE': '502',
                    SCIENCE: '502',
                    STEM: '503',
                    'BIO-MEDICAL SCIENCE': '503',
                    'ENGINEERING SCIENCE': '503',
                    'AVIATION & AEROSPACE ENGINEERING': '503',
                    COMPUTING: '503',
                    ROBOTICS: '503',
                    'AGRICULTURAL SCIENCE': '503',
                    'MANUFACTURING ENGINEERING': '503'
                };
                return aliases[normalized] || '';
            }

            parseProgrammeLabelWithCode(value) {
                const raw = String(value || '').trim();
                const match = raw.match(/^(.*?)\s*(?:\(|\[)\s*(\d{3,4})\s*(?:\)|\])\s*$/);
                if (!match) return null;
                const display = String(match[1] || '').trim().replace(/\s+/g, ' ').replace(/[ ,;:-]+$/, '');
                return display ? { code: String(match[2]), display } : null;
            }

            resolveProgrammeEntry(value) {
                const raw = String(value || '').trim();
                const normalized = raw.toUpperCase();
                if (!normalized) return { code: '', display: '', canonical: '' };
                const parsed = this.parseProgrammeLabelWithCode(raw);
                if (parsed) {
                    return { code: parsed.code, display: parsed.display, canonical: parsed.display };
                }
                const definitions = this.programmeDefinitions || { programmes: [], expandedPrograms: [] };
                const entries = [...(definitions.programmes || []), ...(definitions.expandedPrograms || [])];
                const match = entries.find(item => {
                    const display = String(item.display || '').trim().toUpperCase();
                    const canonical = String(item.canonical || '').trim().toUpperCase();
                    const aliases = (item.aliases || []).map(alias => String(alias || '').trim().toUpperCase());
                    return display === normalized || canonical === normalized || aliases.includes(normalized) || String(item.code || '').trim() === normalized;
                });
                if (match) {
                    const code = String(match.code || '').trim() || this.getDefaultProgrammeCode(match.canonical || match.display);
                    const display = String(match.display || match.canonical || raw || '').trim();
                    const canonical = String(match.canonical || match.display || raw || '').trim();
                    return { code, display, canonical };
                }

                const fallbackCode = this.getDefaultProgrammeCode(raw);
                if (fallbackCode) {
                    return { code: fallbackCode, display: raw, canonical: raw };
                }

                const numericMatch = normalized.match(/\b(6\d{2}|7\d{2}|8\d{2}|9\d{2})\b/);
                const groupMatch = normalized.match(/\b(ENGINEERING TRADES|BUILDING TRADES|BUSINESS)\b/);
                if (numericMatch) {
                    const code = numericMatch[1];
                    const displayGroup = groupMatch ? groupMatch[1] : this.inferDetailedProgrammeGroup(code);
                    const canonical = displayGroup === 'BUSINESS' ? 'BUS' : 'TECH';
                    return {
                        code,
                        display: displayGroup || code,
                        canonical
                    };
                }

                if (normalized === 'ENGINEERING TRADES' || normalized === 'BUILDING TRADES') {
                    return { code: this.getTradeGroupDefaultCode(normalized), display: normalized, canonical: 'TECH' };
                }
                if (normalized === 'BUSINESS') {
                    return { code: this.getTradeGroupDefaultCode(normalized), display: 'BUSINESS', canonical: 'BUS' };
                }

                const defaultCode = this.getDefaultProgrammeCode(normalized);
                return { code: defaultCode, display: raw, canonical: raw };
            }

            formatProgrammeSelectionLabel(value) {
                const entry = this.resolveProgrammeEntry(value);
                const display = String(entry.display || String(value || '').trim()).trim();
                if (!entry.code) return display;
                return `${display} (${entry.code})`;
            }

            getProgrammeOptions(item) {
                const source = [];
                if (Array.isArray(item.programNames) && item.programNames.length) source.push(...item.programNames);
                if (Array.isArray(item.progs) && item.progs.length) source.push(...item.progs);
                if (!source.length) source.push(...ALL_GES_PROGRAMMES);

                const options = [];
                const seen = new Set();
                for (const rawProgram of source) {
                    const entry = this.resolveProgrammeEntry(rawProgram);
                    const value = String(entry.display || entry.canonical || rawProgram || '').trim();
                    if (!value || seen.has(value)) continue;
                    seen.add(value);
                    const label = this.formatProgrammeSelectionLabel(rawProgram);
                    options.push({ value, label, entry, rawProgram });
                }
                return options;
            }

            getSelectedProgrammeEntry(item) {
                const selectedProg = String(item && item.prog || '').trim();
                const selectedEntry = selectedProg ? this.resolveProgrammeEntry(selectedProg) : null;
                const defaultOptions = Array.isArray(item.programNames) && item.programNames.length ? item.programNames : (Array.isArray(item.progs) ? item.progs : []);

                const isBroadTrack = entry => {
                    if (!entry) return false;
                    const value = String(entry.canonical || entry.display || '').trim().toUpperCase();
                    return ['STEM', 'TECH', 'BUS', 'AGRIC', 'GEN. ARTS', 'GEN. SCI', 'HOM. ECON.', 'VIS. ARTS'].includes(value);
                };

                const findDetailedCandidate = () => {
                    for (const candidate of defaultOptions) {
                        const entry = this.resolveProgrammeEntry(candidate);
                        if (!entry) continue;
                        if (!isBroadTrack(entry)) return entry;
                    }
                    return null;
                };

                if (selectedEntry && selectedEntry.code && !isBroadTrack(selectedEntry)) {
                    return selectedEntry;
                }

                if (selectedEntry && selectedEntry.code && isBroadTrack(selectedEntry)) {
                    const detailedCandidate = findDetailedCandidate();
                    if (detailedCandidate) return detailedCandidate;
                }

                if (selectedEntry && (selectedEntry.code || selectedEntry.display)) {
                    return selectedEntry;
                }

                const defaultCandidate = findDetailedCandidate();
                if (defaultCandidate) return defaultCandidate;

                for (const candidate of defaultOptions) {
                    const entry = this.resolveProgrammeEntry(candidate);
                    if (entry && (entry.code || entry.display)) return entry;
                }

                return { code: '', display: '', canonical: '' };
            }

            getSelectedProgrammeValue(item, options, desiredPrograms = []) {
                const selectedProg = String(item && item.prog || '').trim();
                const normalizedDesired = (desiredPrograms || []).map(value => String(value || '').trim().toUpperCase()).filter(Boolean);

                if (selectedProg) {
                    const selectedMatch = options.find(opt => {
                        const value = String(opt.value || '').trim().toUpperCase();
                        return value === selectedProg.toUpperCase();
                    });
                    if (selectedMatch) {
                        return selectedMatch.value;
                    }
                }

                if (!normalizedDesired.length) {
                    return '';
                }

                const desiredMatch = options.find(opt => {
                    const value = String(opt.value || '').trim().toUpperCase();
                    const rawValue = String(opt.rawProgram || '').trim().toUpperCase();
                    return normalizedDesired.includes(value) || normalizedDesired.includes(rawValue);
                });

                return desiredMatch ? desiredMatch.value : '';
            }

            getProgrammeCode(value) {
                return this.resolveProgrammeEntry(value).code;
            }

            schoolMatchesSelectedProgram(school, selectedPrograms) {
                if (!selectedPrograms || selectedPrograms.length === 0) return true;
                const hasRetrievedNames = Array.isArray(school.programNames) && school.programNames.length > 0;
                const names = new Set(this.getSchoolProgramNames(school).map(value => value.toUpperCase()));
                const canonicalPrograms = new Set((school.progs || []).map(value => String(value).toUpperCase()));
                return selectedPrograms.some(program => {
                    const selected = String(program).trim().toUpperCase();
                    if (names.has(selected)) return true;
                    const definition = this.programmeDefinitions && [
                        ...(this.programmeDefinitions.programmes || []),
                        ...(this.programmeDefinitions.expandedPrograms || [])
                    ].find(item => String(item.canonical).toUpperCase() === selected);
                    if (definition && names.has(String(definition.display).toUpperCase())) return true;
                    return !hasRetrievedNames && canonicalPrograms.has(String(this.canonicalizeProgrammeValue(program)).toUpperCase());
                });
            }

            normalizeTrackSelection(track) {
                const raw = String(track || '').trim().toUpperCase();
                if (!raw) return '';
                if (raw === 'SHS' || raw === 'SHTS' || raw === 'SHS/SHTS' || raw === 'SHS_SHTS') return 'SHS_SHTS';
                return raw;
            }

            schoolMatchesSelectedTrack(school, selectedTracks) {
                const normalizedTracks = (selectedTracks || []).map(value => this.normalizeTrackSelection(value)).filter(Boolean);
                if (!normalizedTracks.length) return false;
                return normalizedTracks.some(track => {
                    const type = String(school && school.type || '').trim().toUpperCase();
                    if (track === 'TVET') return type === 'TVET';
                    if (track === 'STEM') return type === 'STEM' || (school.programNames || []).some(name => /STEM|ROBOTICS|ENGINEERING|COMPUTING|AEROSPACE|BIO-MEDICAL|AGRICULTURAL SCIENCE/i.test(name));
                    if (track === 'SHS_SHTS') {
                        if (type === 'SHS' || type === 'SHTS') return true;
                        if (type === 'STEM') return (school.programNames || []).some(name => /GENERAL SCIENCE|GENERAL ARTS|BUSINESS|HOME ECONOMICS|VISUAL ARTS|AGRICULTURAL SCIENCE|LANGUAGES|TECHNICAL/i.test(name));
                        return false;
                    }
                    return false;
                });
            }

            getProgrammeTrackCompatibility(program, school = null) {
                const tags = new Set();
                const raw = String(program || '').trim();
                if (!raw) return tags;

                const entry = this.resolveProgrammeEntry(raw);
                const display = String(entry.display || entry.canonical || raw || '').trim().toUpperCase();
                const canonical = String(entry.canonical || entry.display || raw || '').trim().toUpperCase();

                const isStemLike = /STEM|BIO-MEDICAL|ENGINEERING SCIENCE|AVIATION|AEROSPACE|COMPUTING|ROBOTICS|AGRICULTURAL SCIENCE|MANUFACTURING/i.test(display);
                const isTechnicalLike = /TECH|TECHNOLOGY|MECHANICS|TRADE|TRADES|CONSTRUCTION|ELECTRICAL|AUTOMOTIVE|WELDING|PLUMBING|FURNITURE|UPHOLSTERY|WOOD|ELECTRONICS|REFRIGERATION|PRINTING|SOFTWARE|NETWORKING|DATABASE|DIGITAL|LEATHER|SOLAR|MECHATRONICS|RECYCLING|WATER|CATERING|HOSPITALITY|GARMENT|FASHION|TEXTILE|GRAPHICS|TOURISM|JEWELLERY|HAIRDRESSING|BEAUTY|SECRETARIAL|ACCOUNTING|INFO\. TECH|MOTOR|MACHINERY|ENGINEERING/i.test(display);
                const isShsLike = /GEN\. SCI|GENERAL SCIENCE|GEN\. ARTS|GENERAL ARTS|BUS|BUSINESS|HOM\. ECON\.|HOME ECONOMICS|VIS\. ARTS|VISUAL ARTS|AGRIC|AGRICULTURE|LANGUAGES/i.test(display);
                const isExplicitTvetTrack = ['TECH', 'TECHNICAL', 'TVET', 'VOCATIONAL', 'ENGINEERING TRADES', 'BUILDING TRADES'].includes(canonical) || ['TECH', 'TECHNICAL', 'TVET', 'VOCATIONAL', 'ENGINEERING TRADES', 'BUILDING TRADES'].includes(display);

                if (isStemLike) tags.add('STEM');
                if (isTechnicalLike || isExplicitTvetTrack) {
                    tags.add('TVET');
                }
                if (isShsLike) tags.add('SHS_SHTS');

                if (school) {
                    const type = String(school.type || '').trim().toUpperCase();
                    if (type === 'TVET') tags.add('TVET');
                    if (type === 'STEM') {
                        tags.add('STEM');
                        if (isShsLike) tags.add('SHS_SHTS');
                    }
                    if (type === 'SHS' || type === 'SHTS') tags.add('SHS_SHTS');
                }

                return tags;
            }

            programmeMatchesSelectedTracks(program, selectedTracks, school = null) {
                const normalizedTracks = (selectedTracks || []).map(value => this.normalizeTrackSelection(value)).filter(Boolean);
                if (!normalizedTracks.length) return false;
                const tags = this.getProgrammeTrackCompatibility(program, school);
                return normalizedTracks.some(track => {
                    if (track === 'SHS_SHTS') return tags.has('SHS_SHTS');
                    if (track === 'TVET') return tags.has('TVET');
                    if (track === 'STEM') return tags.has('STEM');
                    return false;
                });
            }

            toggleAllDesiredProgramSelections(checked, recalculateNow = true) {
                const container = document.getElementById('cand-program');
                if (!container) return;
                container.querySelectorAll('input[type="checkbox"][data-filter-item]').forEach(input => {
                    input.checked = !!checked;
                });
                this.updateToggleAllProgramsCheckbox();
                if (recalculateNow) this.recalculate();
            }

            clearDesiredProgramSelections(recalculateNow = true) {
                this.toggleAllDesiredProgramSelections(false, recalculateNow);
            }

            updateToggleAllProgramsCheckbox() {
                const toggleInput = document.getElementById('toggle-all-programs');
                const container = document.getElementById('cand-program');
                if (!toggleInput || !container) return;
                const checkboxes = Array.from(container.querySelectorAll('input[type="checkbox"][data-filter-item]'));
                if (checkboxes.length === 0) {
                    toggleInput.checked = false;
                    toggleInput.indeterminate = false;
                    return;
                }
                const checkedCount = checkboxes.filter(cb => cb.checked).length;
                if (checkedCount === checkboxes.length) {
                    toggleInput.checked = true;
                    toggleInput.indeterminate = false;
                } else if (checkedCount === 0) {
                    toggleInput.checked = false;
                    toggleInput.indeterminate = false;
                } else {
                    toggleInput.checked = false;
                    toggleInput.indeterminate = true;
                }
            }

            clearDeselectedTrackProgramSelections(selectedTracks) {
                const container = document.getElementById('cand-program');
                if (!container) return;
                const normalizedTracks = (selectedTracks || []).map(value => this.normalizeTrackSelection(value)).filter(Boolean);
                const checkboxes = Array.from(container.querySelectorAll('input[type="checkbox"][data-filter-item]'));
                checkboxes.forEach(input => {
                    const rawValue = String(input.value || '').trim();
                    if (!rawValue) return;
                    const tags = this.getProgrammeTrackCompatibility(rawValue);
                    const isCompatible = normalizedTracks.length === 0 || normalizedTracks.some(track => {
                        if (track === 'SHS_SHTS') return tags.has('SHS_SHTS');
                        if (track === 'TVET') return tags.has('TVET');
                        if (track === 'STEM') return tags.has('STEM');
                        return false;
                    });
                    if (!isCompatible) {
                        input.checked = false;
                    }
                });
            }

            updateDesiredProgramOptions() {
                const container = document.getElementById('cand-program');
                const trackContainer = document.getElementById('cand-track');
                if (!container || !trackContainer) return;
                const selectedTracks = Array.from(trackContainer.querySelectorAll('input[data-filter-item]:checked')).map(input => this.normalizeTrackSelection(input.value));
                this.clearDeselectedTrackProgramSelections(selectedTracks);
                const previous = new Set(Array.from(container.querySelectorAll('input[type="checkbox"][data-filter-item]:checked')).map(input => this.canonicalizeProgrammeValue(input.value).toUpperCase()));
                const sourceSchools = (this.schools || []).filter(school => this.schoolMatchesSelectedTrack(school, selectedTracks));
                const optionMap = new Map();

                const addResolved = (raw, school = null) => {
                    const entry = this.resolveProgrammeEntry(raw || '');
                    const key = String((entry.display || entry.canonical || raw) || '').trim().toUpperCase();
                    if (!key) return;
                    if (!this.programmeMatchesSelectedTracks(raw, selectedTracks, school)) return;
                    optionMap.set(key, entry);
                };

                sourceSchools.forEach(school => {
                    (this.getSchoolProgramNames(school) || []).forEach(prog => addResolved(prog, school));
                });

                if (selectedTracks.includes('SHS_SHTS')) {
                    const shsDefaults = ['AGRICULTURAL SCIENCE', 'BUSINESS', 'TECHNICAL', 'HOME ECONOMICS', 'VISUAL ARTS', 'GENERAL ARTS', 'GENERAL SCIENCE', 'LANGUAGES', 'STEM'];
                    shsDefaults.forEach(p => addResolved(p));
                }

                if (selectedTracks.includes('TVET')) {
                    const tradeGroups = (this.programmeDefinitions && this.programmeDefinitions.tradeGroups) || ['ENGINEERING TRADES', 'BUILDING TRADES', 'BUSINESS'];
                    tradeGroups.forEach(group => addResolved(group));
                }

                if (selectedTracks.includes('STEM')) {
                    const expanded = (this.programmeDefinitions && this.programmeDefinitions.expandedPrograms) || [];
                    expanded.filter(e => String(e.canonical || '').toUpperCase() === 'STEM').forEach(e => addResolved(e.display || (e.aliases && e.aliases[0]) || e.canonical));
                    const shsDefaults = ['AGRICULTURAL SCIENCE', 'BUSINESS', 'TECHNICAL', 'HOME ECONOMICS', 'VISUAL ARTS', 'GENERAL ARTS', 'GENERAL SCIENCE', 'LANGUAGES'];
                    shsDefaults.forEach(p => addResolved(p));
                }

                const hasSEN = sourceSchools.some(s => (s.type && String(s.type).toUpperCase().includes('SEN')) || (s.programNames || []).some(n => /SEN|SPECIAL EDUCATION|HEARING|VISUAL|LEARNING/i.test(n)));
                if (hasSEN) {
                    ['HEARING IMPAIRED', 'VISUALLY IMPAIRED', 'LEARNING DIFFICULTIES'].forEach(cat => addResolved(cat));
                }

                let programmes = Array.from(optionMap.values()).map(entry => {
                    const value = String(entry.display || entry.canonical || '').trim();
                    const label = this.formatProgrammeSelectionLabel(value);
                    return { value, label };
                }).sort((a, b) => a.label.localeCompare(b.label));

                container.innerHTML = programmes.map((p) => {
                    const val = String(p.value || '').trim();
                    return `<label class="flex items-center gap-2 text-xs text-slate-700 rounded-lg p-2 hover:bg-slate-100 cursor-pointer">
                        <input data-filter-item type="checkbox" value="${val.replace(/"/g, '&quot;')}" onchange="app.recalculate()" class="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500">
                        <span>${p.label}</span>
                    </label>`;
                }).join('') || '<span class="text-slate-500">No programmes available for the selected track.</span>';
                this.updateToggleAllProgramsCheckbox();
            }

            handleTrackChange() {
                this.updateDesiredProgramOptions();
                this.recalculate();
            }

            restoreSavedProgramSelections() {
                if (!this._restoredProgramSelections) return;
                const programContainer = document.getElementById('cand-program');
                if (!programContainer) return;
                const restoredCanonicals = new Set(this._restoredProgramSelections.map(value => this.canonicalizeProgrammeValue(String(value).trim()).toUpperCase()));
                programContainer.querySelectorAll('input[type="checkbox"][data-filter-item]').forEach(input => {
                    const inputCanonical = this.canonicalizeProgrammeValue(String(input.value).trim()).toUpperCase();
                    input.checked = restoredCanonicals.has(inputCanonical);
                });
                this.updateToggleAllProgramsCheckbox();
            }

            clearAndResetPairings() {
                if (this._isInitializing) return;
                this.selectedChoices = [];

                const selectedSchoolsCard = document.getElementById('selected-schools-card');
                if (selectedSchoolsCard) {
                    selectedSchoolsCard.classList.add('hidden');
                }

                const pkgContainer = document.getElementById('package-cards-container');
                if (pkgContainer) {
                    pkgContainer.innerHTML = '';
                    pkgContainer.classList.add('hidden');
                }

                this.renderSelectedTable();
                this.updatePairingsButtonState();
                this.saveStateToStorage();
                if (typeof window.updateNavigationButtons === 'function') {
                    window.updateNavigationButtons('profile');
                }
            }

            recalculate() {
                this.updateToggleAllProgramsCheckbox();
                this.clearAndResetPairings();
            }

            /**
             * ALGORITHMIC PAIRING GENERATOR
             */
            appendPackageDebug(message) {
                const output = document.getElementById('package-debug-output');
                this.debugLog.push(message);
                if (this.debugLog.length > 8) {
                    this.debugLog.shift();
                }
                if (output) {
                    output.innerHTML = this.debugLog.join('<br>');
                    output.classList.add('hidden');
                }
                console.debug('[BECE Package Debug]', message);
            }

            generatePackages() {
                const selectedGenders = this.getSelectedGenderValues();
                const programElem = document.getElementById('cand-program');
                const trackElem = document.getElementById('cand-track');
                const districtElem = document.getElementById('cand-district');
                const regionElem = document.getElementById('cand-region');
                const localityElem = document.getElementById('cand-locality');
                const selectedPrograms = programElem ? Array.from(programElem.querySelectorAll('input[type="checkbox"][data-filter-item]')).filter(input => input.checked).map(input => input.value) : ['GEN. SCI'];
                const prog = selectedPrograms.length ? this.canonicalizeProgrammeValue(selectedPrograms[0]) : '';
                const selectedTracks = trackElem ? Array.from(trackElem.querySelectorAll('input[type="checkbox"][data-filter-item]')).filter(input => input.checked).map(input => this.normalizeTrackSelection(input.value)) : [];
                const userDistrict = districtElem ? districtElem.value : '';
                const userRegion = regionElem ? regionElem.value : '';
                const userLocality = localityElem ? localityElem.value : '';
                const strategy = this.getAggregateStrategy(this.computedAggregate);

                const effectiveAggregate = this.manualAggregateOverride !== null ? this.manualAggregateOverride : this.computedAggregate;
                const pool = this.schools.filter(s => {
                    const genderMatch = this.schoolMatchesSelectedGender(s, selectedGenders);
                    const trackMatch = this.schoolMatchesSelectedTrack(s, selectedTracks);
                    const progMatch = this.schoolMatchesSelectedProgram(s, selectedPrograms);
                    const cutoffMatch = this.isSchoolQualifiedByAggregate(s, effectiveAggregate);
                    return genderMatch && trackMatch && progMatch && cutoffMatch;
                });

                this.appendPackageDebug(`Pool built: ${pool.length} schools for aggregate ${effectiveAggregate} and programs ${selectedPrograms.join(', ')}`);

                const balancedStrategy = {
                    ...strategy,
                    categoryAWeight: strategy.categoryAWeight + 4,
                    categoryBWeight: strategy.categoryBWeight + 2,
                    categoryCWeight: strategy.categoryCWeight - 4
                };
                const safePlacementStrategy = {
                    ...strategy,
                    categoryAWeight: strategy.categoryAWeight,
                    categoryBWeight: strategy.categoryBWeight + 2,
                    categoryCWeight: strategy.categoryCWeight + 4
                };
                const highAssuranceStrategy = {
                    ...strategy,
                    allowA: false,
                    categoryAWeight: strategy.categoryAWeight - 14,
                    categoryBWeight: strategy.categoryBWeight + 2,
                    categoryCWeight: strategy.categoryCWeight + 10
                };
                const categoryCFocusStrategy = {
                    ...strategy,
                    allowA: false,
                    allowB: false,
                    categoryAWeight: strategy.categoryAWeight - 24,
                    categoryBWeight: strategy.categoryBWeight - 10,
                    categoryCWeight: strategy.categoryCWeight + 14
                };

                let pkg1 = this.buildValidCombination(pool, prog, balancedStrategy, userDistrict, userRegion, userLocality, 2, 3, 3);
                let pkg2 = this.buildValidCombination(pool, prog, safePlacementStrategy, userDistrict, userRegion, userLocality, 1, 3, 4);
                let pkg3 = this.buildValidCombination(pool, prog, highAssuranceStrategy, userDistrict, userRegion, userLocality, 0, 2, 6);
                // Category C Focus: prefer Category C schools (up to 8), fall back using same constraints if insufficient
                let pkg4 = this.buildValidCombination(pool, prog, categoryCFocusStrategy, userDistrict, userRegion, userLocality, 0, 0, 8);

                this.appendPackageDebug(`Package lengths: pkg1=${pkg1.length}, pkg2=${pkg2.length}, pkg3=${pkg3.length}`);

                this.renderPackageCards([
                    { title: "Balanced Optimal Strategy", subtitle: "2 Cat A + 3 Cat B + 3 Cat C", list: pkg1, tag: "Recommended" },
                    { title: "Safe Placement Focus", subtitle: "1 Cat A + 3 Cat B + 4 Cat C", list: pkg2, tag: "High Security" },
                    { title: "High-Assurance / Technical", subtitle: "0 Cat A + 2 Cat B + 6 Cat C", list: pkg3, tag: "Guaranteed Fit" },
                    { title: "Category C Focus", subtitle: "All Category C (where possible) — technical/assurance focus", list: pkg4, tag: "Cat C" }
                ]);
                const pkgContainer = document.getElementById('package-cards-container');
                if (pkgContainer) pkgContainer.classList.remove('hidden');

                const selectedSchoolsCard = document.getElementById('selected-schools-card');
                if (selectedSchoolsCard) {
                    if (this.selectedChoices && this.selectedChoices.length > 0) {
                        selectedSchoolsCard.classList.remove('hidden');
                    } else {
                        selectedSchoolsCard.classList.add('hidden');
                    }
                }

                this.renderSelectedTable();
                this.updatePairingsButtonState();
                this.saveStateToStorage();
            }

            renderSchoolDescriptors(sch) {
                if (!sch) return '';
                const code = sch.code || '—';
                const region = sch.region || '';
                const district = sch.district || '';
                const location = sch.location || '';
                const status = sch.status || sch.res || '';
                const gender = sch.gender || '';

                const badges = [];

                if (code && code !== '—') {
                    badges.push(`
                        <span class="inline-flex items-center gap-1 font-mono text-[10px] font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/80 shrink-0">
                            <i class="fa-solid fa-hashtag text-[9px] text-slate-400"></i>${code}
                        </span>
                    `);
                }

                if (region && region !== 'Unknown' && region !== '—') {
                    badges.push(`
                        <span class="inline-flex items-center gap-1 text-[10px] font-semibold bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-md border border-emerald-200/80 shrink-0">
                            <i class="fa-solid fa-map-pin text-[9px] text-emerald-600"></i>${region}
                        </span>
                    `);
                }

                if (district && district !== 'Unknown' && district !== '—') {
                    badges.push(`
                        <span class="inline-flex items-center gap-1 text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/80 shrink-0">
                            <i class="fa-solid fa-location-dot text-[9px] text-slate-400"></i>${district}
                        </span>
                    `);
                }

                if (location && location !== 'Unknown' && location !== '—' && location.toLowerCase() !== district.toLowerCase()) {
                    badges.push(`
                        <span class="inline-flex items-center gap-1 text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md border border-slate-200/80 shrink-0">
                            <i class="fa-solid fa-building text-[9px] text-slate-400"></i>${location}
                        </span>
                    `);
                }

                if (gender) {
                    badges.push(`
                        <span class="inline-flex items-center gap-1 text-[10px] font-medium bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-md border border-indigo-200/80 shrink-0">
                            <i class="fa-solid fa-user-group text-[9px] text-indigo-500"></i>${gender}
                        </span>
                    `);
                }

                if (status && status !== 'Unknown') {
                    badges.push(`
                        <span class="inline-flex items-center gap-1 text-[10px] font-semibold bg-sky-50 text-sky-800 px-2 py-0.5 rounded-md border border-sky-200/80 shrink-0">
                            <i class="fa-solid fa-bed text-[9px] text-sky-600"></i>${status}
                        </span>
                    `);
                }

                return `<div class="mt-1 flex flex-wrap items-center gap-1.5">${badges.join('')}</div>`;
            }

            renderPackageCards(packages) {
                const container = document.getElementById('package-cards-container');
                if (!container) return;
                container.innerHTML = '';
                container.classList.remove('hidden');

                packages.forEach((pkg, idx) => {
                    const card = document.createElement('div');
                    card.className = "bg-slate-50 border border-slate-200 hover:border-emerald-500 rounded-xl p-3 flex flex-col justify-between space-y-2 cursor-pointer transition hover:shadow-md";

                    const applyPkg = (event) => {
                        if (event) event.stopPropagation();
                        this.selectedChoices = [...pkg.list];
                        this.renderSelectedTable();
                        const selectedSchoolsCard = document.getElementById('selected-schools-card');
                        if (selectedSchoolsCard) {
                            selectedSchoolsCard.classList.remove('hidden');
                            selectedSchoolsCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                        this.updatePairingsButtonState();
                        this.saveStateToStorage();
                    };

                    card.onclick = applyPkg;

                    card.innerHTML = `
                        <div>
                            <div class="flex items-center justify-between mb-1">
                                <span class="font-bold text-xs text-slate-900">${pkg.title}</span>
                                <span class="px-2 py-0.5 text-[10px] bg-emerald-100 text-emerald-800 rounded font-semibold">${pkg.tag}</span>
                            </div>
                            <p class="text-[11px] text-slate-500 mb-2">${pkg.subtitle}</p>
                            <div class="space-y-1 bg-white p-2 rounded-lg border border-slate-200/60">
                                ${pkg.list.slice(0, 3).map((s, i) => `
                                    <div class="text-[10px] text-slate-700 flex items-center justify-between gap-1 py-0.5 border-b border-slate-100 last:border-none">
                                        <span class="truncate font-medium"><strong class="text-emerald-700 font-mono">#${i+1}</strong> ${s.name}</span>
                                        <span class="shrink-0 text-[9px] px-1.5 py-0.2 font-bold rounded bg-slate-100 text-slate-700 border border-slate-200">Cat ${s.category}</span>
                                    </div>
                                `).join('')}
                                <div class="text-[10px] text-slate-400 font-mono text-center pt-0.5">+ 5 more choices</div>
                            </div>
                        </div>
                        <button class="w-full mt-2 py-1.5 bg-slate-900 hover:bg-emerald-600 text-white font-bold rounded-lg text-[11px] transition apply-package-button">
                            Apply Package
                        </button>
                    `;

                    const applyButton = card.querySelector('.apply-package-button');
                    if (applyButton) {
                        applyButton.onclick = applyPkg;
                    }

                    container.appendChild(card);
                });
            }

            normalizeDistrict(district) {
                return (district || '')
                    .toLowerCase()
                    .replace(/\s+/g, ' ')
                    .replace(/\b(municipal|metropolitan|municipality|metro|district|city|mun)\b/g, '')
                    .replace(/\s+/g, ' ')
                    .trim();
            }

            getLocationTokens(value) {
                const stopWords = new Set(['and','the','for','with','from','near','town','city','community','municipal','metro','district','central','senior','high','school','college','st','old','new','east','west','north','south','municipality','mun']);
                return (value || '')
                    .toLowerCase()
                    .replace(/[^a-z0-9\s]/g, ' ')
                    .split(/\s+/)
                    .filter(word => word.length >= 3 && !stopWords.has(word));
            }

            isDistrictNeighbor(selectedDistrict, candidateDistrict) {
                if (!selectedDistrict || !candidateDistrict) return false;
                const selectedKey = this.normalizeLocationKey(selectedDistrict);
                const candidateKey = this.normalizeLocationKey(candidateDistrict);
                return (this.districtNeighborMap[selectedKey] || []).includes(candidateKey)
                    || (this.districtNeighborMap[candidateKey] || []).includes(selectedKey);
            }

            isRegionNeighbor(selectedRegion, candidateRegion) {
                if (!selectedRegion || !candidateRegion) return false;
                const selectedKey = this.normalizeLocationKey(this.canonicalRegionName(selectedRegion));
                const candidateKey = this.normalizeLocationKey(this.canonicalRegionName(candidateRegion));
                return (this.regionNeighborMap[selectedKey] || []).includes(candidateKey)
                    || (this.regionNeighborMap[candidateKey] || []).includes(selectedKey);
            }

            isNearbyDistrictMatch(school, selectedDistrict) {
                if (!selectedDistrict) return false;
                const schoolDistrict = school.district || '';
                return this.isDistrictNeighbor(selectedDistrict, schoolDistrict) || this.isDistrictNeighbor(schoolDistrict, selectedDistrict);
            }

            isNearbyRegionMatch(school, selectedRegion) {
                if (!selectedRegion) return false;
                return this.isRegionNeighbor(selectedRegion, school.region) || this.normalizeRegion(school.region) === this.normalizeRegion(selectedRegion);
            }

            getLocalityMatchStrength(school, locality) {
                const localityTokens = this.getLocationTokens(locality);
                if (localityTokens.length === 0) return 0;

                const schoolTokens = new Set(this.getLocationTokens(`${school.name} ${school.district} ${school.location}`));
                let matchCount = 0;
                for (const token of localityTokens) {
                    if (schoolTokens.has(token)) matchCount++;
                }
                return matchCount;
            }

            matchesLocality(school, locality, selectedRegion) {
                if (!locality || !locality.trim()) return false;
                const localityStrength = this.getLocalityMatchStrength(school, locality);
                if (localityStrength >= 2) return true;

                const sameRegion = this.normalizeRegion(school.region) === this.normalizeRegion(selectedRegion);
                return sameRegion && localityStrength === 1;
            }

            isDaySchoolAllowed(school, selectedDistrict, selectedRegion, userLocality) {
                if (!school || !school.status || !school.status.toLowerCase().includes('day')) return false;
                if (this.normalizeDistrict(school.district) === this.normalizeDistrict(selectedDistrict)) return true;
                if (this.isNearbyDistrictMatch(school, selectedDistrict)) return true;
                if (this.matchesLocality(school, userLocality, selectedRegion)) return true;
                return this.normalizeRegion(school.region) === this.normalizeRegion(selectedRegion);
            }

            getSchoolCutoff(school) {
                const category = (school.category || '').toUpperCase();
                if (category === 'A') return this.cutoffThresholds.A;
                if (category === 'B') return this.cutoffThresholds.B;
                if (category === 'C') return this.cutoffThresholds.C;
                return this.cutoffThresholds.C;
            }

            isSchoolQualifiedByAggregate(school, aggregate) {
                if (!school || typeof aggregate !== 'number' || aggregate <= 0) return false;
                return aggregate <= this.getSchoolCutoff(school);
            }

            getSchoolSearchRadius(school, selectedDistrict, selectedRegion, selectedLocality) {
                return this.pairingEngine && typeof this.pairingEngine.getSchoolSearchRadius === 'function'
                    ? this.pairingEngine.getSchoolSearchRadius(school, selectedDistrict, selectedRegion, selectedLocality)
                    : 1;
            }

            getSchoolRing(school, selectedDistrict, selectedRegion, selectedLocality) {
                return this.pairingEngine.getSchoolSearchRadius(school, selectedDistrict, selectedRegion, selectedLocality);
            }

            isRing1DaySchool(school, selectedDistrict, selectedRegion, selectedLocality) {
                if (!school || !school.status || !school.status.toLowerCase().includes('day')) return false;
                return this.pairingEngine.isRing1DaySchool(school, selectedDistrict, selectedRegion, selectedLocality);
            }

            getGeographicProximityScore(school, selectedDistrict, selectedRegion, userLocality) {
                return this.pairingEngine.getGeographicProximityScore(school, selectedDistrict, selectedRegion, userLocality);
            }

            isCatchmentMatch(school, selectedDistrict, selectedRegion) {
                return this.pairingEngine.isCatchmentMatch(school, selectedDistrict, selectedRegion);
            }

            getAggregateStrategy(aggregate) {
                return this.pairingEngine.getAggregateStrategy(aggregate);
            }

            isSchoolAllowedByAggregate(school, strategy) {
                return this.pairingEngine.isSchoolAllowedByAggregate(school, strategy);
            }

            scoreSchoolForSelection(school, selectedProg, selectedDistrict, selectedRegion, userLocality, strategy) {
                return this.pairingEngine.scoreSchoolForSelection(school, selectedProg, selectedDistrict, selectedRegion, userLocality, strategy);
            }

            getPreferredResidenceType(school, selectedDistrict, selectedRegion, userLocality, dayCount, boardingCount) {
                return this.pairingEngine.getPreferredResidenceType(school, selectedDistrict, selectedRegion, userLocality, dayCount, boardingCount);
            }

            buildValidCombination(pool, selectedProg, strategy, selectedDistrict, selectedRegion, selectedLocality, maxA, maxB, countC) {
                return this.pairingEngine.buildValidCombination(pool, selectedProg, strategy, selectedDistrict, selectedRegion, selectedLocality, maxA, maxB, countC);
            }

            getAllowedResidenceOptions(school) {
                const status = (school.status || '').toLowerCase();
                const dayAllowed = status.includes('day');
                const boardingAllowed = status.includes('boarding');

                if (dayAllowed && !boardingAllowed) {
                    return [{ value: 'Day', label: 'Day' }];
                }
                if (boardingAllowed && !dayAllowed) {
                    return [{ value: 'Boarding', label: 'Boarding' }];
                }
                return [
                    { value: 'Boarding', label: 'Boarding' },
                    { value: 'Day', label: 'Day' }
                ];
            }

            normalizeResidenceForSchool(school) {
                const allowed = this.getAllowedResidenceOptions(school);
                const allowedValues = allowed.map(option => option.value);
                if (!allowedValues.includes(school.res)) {
                    school.res = allowed[0].value;
                }
                return school.res;
            }

            renderSelectedTable() {
                const tbody = document.getElementById('selected-schools-tbody');
                const printTbody = document.getElementById('print-schools-tbody');
                if (!tbody || !printTbody) return;
                tbody.innerHTML = '';
                printTbody.innerHTML = '';

                let catACount = 0, catBCount = 0, catCCount = 0;
                let boardingCount = 0, dayCount = 0;

                this.selectedChoices.forEach((item, idx) => {
                    if (!item) return;
                    if (item.category === "A") catACount++;
                    if (item.category === "B") catBCount++;
                    if (item.category === "C") catCCount++;
                    if (item.res === "Boarding") boardingCount++;
                    if (item.res === "Day") dayCount++;

                    const tr = document.createElement('tr');
                    tr.className = "hover:bg-slate-50/80 transition";
                    const allowedOptions = this.getAllowedResidenceOptions(item);
                    const normalizedRes = this.normalizeResidenceForSchool(item);
                    const residenceSummary = `${item.location || `${item.district || 'Unknown'} • ${item.region}` } • District: ${item.district || 'Unknown'} • Region: ${item.region || 'Unknown'} • ${item.res || 'Status unknown'}`;
                    tr.innerHTML = `
                        <td class="p-3 text-center font-bold text-slate-500">${idx + 1}</td>
                        <td class="p-3">
                            <div class="flex items-center gap-2">
                                <span class="font-bold text-slate-900">${item.name}</span>
                                <span class="px-2 py-0.5 rounded text-[10px] font-bold ${item.type === 'TVET' ? 'bg-amber-100 text-amber-800' : item.type === 'SHTS' ? 'bg-blue-100 text-blue-800' : item.type === 'STEM' ? 'bg-fuchsia-100 text-fuchsia-800' : 'bg-slate-200 text-slate-800'}">${item.type || 'SHS'}</span>
                            </div>
                            ${this.renderSchoolDescriptors(item)}
                        </td>
                        <td class="p-3">
                            <span class="px-2 py-0.5 rounded text-[10px] font-extrabold ${item.category === 'A' ? 'bg-purple-100 text-purple-800' : item.category === 'B' ? 'bg-blue-100 text-blue-800' : 'bg-slate-200 text-slate-800'}">
                                Cat ${item.category}
                            </span>
                        </td>
                        <td class="p-3">
                            <select onchange="app.changeResidence(${idx}, this.value)" class="bg-white border border-slate-300 rounded p-1 text-xs font-medium">
                                ${allowedOptions.map(option => `<option value="${option.value}" ${normalizedRes === option.value ? 'selected' : ''}>${option.label}</option>`).join('')}
                            </select>
                        </td>
                        <td class="p-3">
                            <select onchange="app.changeProgramme(${idx}, this.value)" class="bg-emerald-50 text-emerald-900 border border-emerald-300 rounded p-1 text-xs font-semibold focus:ring-2 focus:ring-emerald-500">
                                ${(() => {
                                    const programElem = document.getElementById('cand-program');
                                    const desiredPrograms = programElem ? Array.from(programElem.querySelectorAll('input[type="checkbox"][data-filter-item]')).filter(input => input.checked).map(input => input.value) : [];
                                    const options = this.getProgrammeOptions(item);
                                    const selectedValue = this.getSelectedProgrammeValue(item, options, desiredPrograms);
                                    const html = [];
                                    if (!selectedValue) {
                                        html.push(`<option value="" selected disabled>Choose programme</option>`);
                                    }
                                    html.push(...options.map(opt => {
                                        const selected = selectedValue === opt.value;
                                        return `<option value="${opt.value}" ${selected ? 'selected' : ''}>${opt.label}</option>`;
                                    }));
                                    return html.join('');
                                })()}
                            </select>
                        </td>
                        <td class="p-3 text-center no-print">
                            <button onclick="app.openSchoolModal(${idx})" class="p-1.5 text-slate-500 hover:text-emerald-600 hover:bg-slate-100 rounded-lg transition" title="Swap School">
                                <i class="fa-solid fa-arrows-rotate"></i>
                            </button>
                        </td>
                    `;
                    tbody.appendChild(tr);

                    const ptr = document.createElement('tr');
                    const selectedEntry = this.getSelectedProgrammeEntry(item);
                    ptr.innerHTML = `
                        <td class="border border-black p-2 text-center font-bold">${idx + 1}</td>
                        <td class="border border-black p-2 font-mono">${item.code}</td>
                        <td class="border border-black p-2 font-bold">${item.name}</td>
                        <td class="border border-black p-2 text-center">Cat ${item.category}</td>
                        <td class="border border-black p-2">${selectedEntry.code || '—'}</td>
                        <td class="border border-black p-2">${selectedEntry.display || '—'}</td>
                        <td class="border border-black p-2 text-center">${item.res}</td>
                    `;
                    printTbody.appendChild(ptr);
                });

                // Render mobile badge view (visible on small screens)
                const badgesContainer = document.getElementById('selected-schools-badges');
                if (badgesContainer) {
                    badgesContainer.innerHTML = this.selectedChoices.map((item, idx) => {
                        if (!item) return '';
                        const allowedOptions = this.getAllowedResidenceOptions(item);
                        const normalizedRes = this.normalizeResidenceForSchool(item);
                        const typeBadge = `<span class="px-2 py-0.5 rounded text-[10px] font-bold ${item.type === 'TVET' ? 'bg-amber-100 text-amber-800' : item.type === 'SHTS' ? 'bg-blue-100 text-blue-800' : item.type === 'STEM' ? 'bg-fuchsia-100 text-fuchsia-800' : 'bg-slate-200 text-slate-800'}">${item.type || 'SHS'}</span>`;
                        const catBadge = `<span class="px-2 py-0.5 rounded text-[10px] font-extrabold ${item.category === 'A' ? 'bg-purple-100 text-purple-800' : item.category === 'B' ? 'bg-blue-100 text-blue-800' : 'bg-slate-200 text-slate-800'}">Cat ${item.category}</span>`;
                        const resSelect = `<select onchange="app.changeResidence(${idx}, this.value)" class="ml-2 bg-white border border-slate-300 rounded p-1 text-xs font-medium">${allowedOptions.map(option => `<option value=\"${option.value}\" ${normalizedRes === option.value ? 'selected' : ''}>${option.label}</option>`).join('')}</select>`;
                        const progSelect = (() => {
                            const options = this.getProgrammeOptions(item);
                            const desiredPrograms = (() => {
                                const programElem = document.getElementById('cand-program');
                                return programElem ? Array.from(programElem.querySelectorAll('input[type="checkbox"][data-filter-item]')).filter(input => input.checked).map(input => input.value) : [];
                            })();
                            const selectedValue = this.getSelectedProgrammeValue(item, options, desiredPrograms);
                            const html = [];
                            if (!selectedValue) {
                                html.push(`<option value="" selected disabled>Choose programme</option>`);
                            }
                            html.push(...options.map(opt => {
                                const selected = selectedValue === opt.value;
                                return `<option value="${opt.value}" ${selected ? 'selected' : ''}>${opt.label}</option>`;
                            }));
                            return `<select onchange="app.changeProgramme(${idx}, this.value)" class="ml-2 bg-emerald-50 text-emerald-900 border border-emerald-300 rounded p-1 text-xs font-semibold">${html.join('')}</select>`;
                        })();
                        return `
                            <div class="bg-white border border-slate-200 rounded p-3 shadow-sm">
                                <div class="flex items-start justify-between">
                                    <div class="flex-1">
                                        <div class="font-bold text-slate-900">${idx + 1}. ${item.name}</div>
                                        ${this.renderSchoolDescriptors(item)}
                                        <div class="mt-2 flex items-center gap-2">
                                            ${typeBadge}
                                            ${catBadge}
                                        </div>
                                    </div>
                                    <div class="flex flex-col items-end space-y-2">
                                        <button onclick="app.openSchoolModal(${idx})" class="p-1.5 text-slate-500 hover:text-emerald-600 hover:bg-slate-100 rounded-lg transition" title="Swap School"><i class="fa-solid fa-arrows-rotate"></i></button>
                                    </div>
                                </div>
                                <div class="mt-3 flex items-center justify-between gap-2">
                                    <div class="text-[11px]">Residence:${resSelect}</div>
                                    <div class="text-[11px]">Programme:${progSelect}</div>
                                </div>
                            </div>
                        `;
                    }).join('');
                }

                document.getElementById('category-counts-bar').innerHTML = `
                    <span class="font-bold text-slate-700">Categories:</span>
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold ${catACount <= 2 ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}">Cat A: ${catACount}/2</span>
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold ${catBCount <= 3 ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}">Cat B: ${catBCount}/3</span>
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 text-slate-800">Cat C: ${catCCount}</span>
                `;

                document.getElementById('residence-counts-bar').innerHTML = `
                    <span class="font-bold text-slate-700">Residential:</span>
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold ${boardingCount === 5 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">Boarding: ${boardingCount}/5</span>
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold ${dayCount === 3 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">Day: ${dayCount}/3</span>
                `;

                this.validateRules(catACount, catBCount, boardingCount, dayCount);
                // persist current selection state after rendering
                try { this.saveStateToStorage(); } catch (e) { console.warn('Save state failed', e); }
                this.updatePairingsButtonState();
            }

            changeResidence(idx, value) {
                const school = this.selectedChoices[idx];
                if (!school) return;
                const allowed = this.getAllowedResidenceOptions(school);
                const allowedValues = allowed.map(option => option.value);
                if (!allowedValues.includes(value)) {
                    this.selectedChoices[idx].res = allowed[0].value;
                } else {
                    this.selectedChoices[idx].res = value;
                }
                this.renderSelectedTable();
                this.saveStateToStorage();
            }

            changeProgramme(idx, value) {
                if (this.selectedChoices[idx]) {
                    this.selectedChoices[idx].prog = String(value || '').trim();
                    this.renderSelectedTable();
                    this.saveStateToStorage();
                }
            }

            validateRules(catA, catB, boarding, day) {
                const uniqueCodes = new Set(this.selectedChoices.map(s => s.code)).size;
                const isUnique = uniqueCodes === 8;
                const catAValid = catA <= 2;
                const catBValid = catB <= 3;
                const resValid = (boarding === 5 && day === 3);

                const checklistHtml = `
                    <div class="flex items-center justify-between">
                        <span>1. Maximum 2 Category A Schools:</span>
                        <span class="${catAValid ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}">${catAValid ? '✓ PASS (' + catA + '/2)' : '✗ EXCEEDED (' + catA + '/2)'}</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span>2. Maximum 3 Category B Schools:</span>
                        <span class="${catBValid ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}">${catBValid ? '✓ PASS (' + catB + '/3)' : '✗ EXCEEDED (' + catB + '/3)'}</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span>3. Exactly 5 Boarding & 3 Day Choices:</span>
                        <span class="${resValid ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}">${resValid ? '✓ PASS (5 B / 3 D)' : '⚠ ' + boarding + ' B / ' + day + ' D'}</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span>4. No Repeated School Codes:</span>
                        <span class="${isUnique ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}">${isUnique ? '✓ 8 UNIQUE SCHOOLS' : '✗ DUPLICATE DETECTED'}</span>
                    </div>
                `;

                const detailEl = document.getElementById('rules-detail-content') || document.getElementById('rules-checklist');
                if (detailEl) detailEl.innerHTML = checklistHtml;

                const inlineEl = document.getElementById('rules-checklist-inline');
                if (inlineEl) inlineEl.innerHTML = checklistHtml;

                const allOk = catAValid && catBValid && isUnique;
                const badge = document.getElementById('overall-rules-badge');
                if (allOk) {
                    badge.textContent = "100% VALID";
                    badge.className = "px-2 py-0.5 text-[10px] rounded font-extrabold bg-emerald-500 text-slate-950";
                } else {
                    badge.textContent = "RULES VIOLATED";
                    badge.className = "px-2 py-0.5 text-[10px] rounded font-extrabold bg-rose-500 text-white";
                }
                // update a compact textual summary for quick glance
                const mini = document.getElementById('rules-mini-summary');
                if (mini) {
                    const parts = [];
                    parts.push(catAValid ? `A:${catA}/2` : `A:${catA}/2!`);
                    parts.push(catBValid ? `B:${catB}/3` : `B:${catB}/3!`);
                    parts.push(`Board:${boarding}`);
                    parts.push(`Day:${day}`);
                    mini.textContent = parts.join(' • ');
                }
                // ensure detail popup hidden by default
                const detailPopup = document.getElementById('rules-detail');
                if (detailPopup && !detailPopup.classList.contains('hidden')) {
                    // leave as-is if user opened it; otherwise keep hidden
                }
            }

            // Modal Swap Functions
            toggleRulesDetail() {
                const detail = document.getElementById('rules-detail');
                if (!detail) return;
                if (detail.classList.contains('hidden')) {
                    detail.classList.remove('hidden');
                } else {
                    detail.classList.add('hidden');
                }
            }

            openSchoolModal(rankIdx) {
                this.activeModalRankIndex = rankIdx;
                const modal = document.getElementById('school-picker-modal');
                document.getElementById('modal-title').textContent = `Replace Choice #${rankIdx + 1} (${this.selectedChoices[rankIdx].name})`;
                this.collapsePickerModalFilterSection();
                modal.classList.remove('hidden');
                this.filterModalList();
            }

            closeSchoolModal() {
                document.getElementById('school-picker-modal').classList.add('hidden');
            }

            getSelectedFilterValues(selectId) {
                const container = document.getElementById(selectId);
                if (!container) return [];
                if (container.tagName === 'SELECT') {
                    return Array.from(container.selectedOptions).map(option => option.value).filter(Boolean);
                }
                return Array.from(container.querySelectorAll('input[type="checkbox"][data-filter-item]'))
                    .filter(input => input.checked)
                    .map(input => input.value)
                    .filter(Boolean);
            }

            createFilterOptions(container, options, previousValues, useSavedSelections) {
                container.innerHTML = options.map(value => {
                    const isChecked = useSavedSelections
                        ? previousValues.includes(value)
                        : previousValues.length === 0 || previousValues.includes(value);
                    return `
                        <label class="flex items-center gap-2 text-slate-700 rounded-lg p-1 hover:bg-slate-50 cursor-pointer">
                            <input data-filter-item type="checkbox" value="${value}" ${isChecked ? 'checked' : ''} onchange="app.filterModalList()" class="h-4 w-4 text-emerald-600 border-slate-300 rounded">
                            <span class="text-[13px] truncate">${value}</span>
                        </label>
                    `;
                }).join('');
            }

            populateModalFilterOptions() {
                const catSelect = document.getElementById('modal-cat-filter');
                const resSelect = document.getElementById('modal-res-filter');
                const regionSelect = document.getElementById('modal-region-filter');
                const districtSelect = document.getElementById('modal-district-filter');
                const programmeSelect = document.getElementById('modal-programme-filter');
                const genderSelect = document.getElementById('modal-gender-filter');
                const typeSelect = document.getElementById('modal-type-filter');

                if (!catSelect || !resSelect || !regionSelect || !districtSelect || !programmeSelect || !genderSelect || !typeSelect) return;

                const useSavedSelections = Boolean(this.modalFilterSelections && Object.keys(this.modalFilterSelections).length);
                const previousCategories = useSavedSelections ? (this.modalFilterSelections['modal-cat-filter'] || []) : this.getSelectedFilterValues('modal-cat-filter');
                const previousResStatuses = useSavedSelections ? (this.modalFilterSelections['modal-res-filter'] || []) : this.getSelectedFilterValues('modal-res-filter');
                const previousRegions = useSavedSelections ? (this.modalFilterSelections['modal-region-filter'] || []) : this.getSelectedFilterValues('modal-region-filter');
                const previousDistricts = useSavedSelections ? (this.modalFilterSelections['modal-district-filter'] || []) : this.getSelectedFilterValues('modal-district-filter');
                const previousProgrammes = useSavedSelections ? (this.modalFilterSelections['modal-programme-filter'] || []) : this.getSelectedFilterValues('modal-programme-filter');
                const previousGenders = useSavedSelections ? (this.modalFilterSelections['modal-gender-filter'] || []) : this.getSelectedFilterValues('modal-gender-filter');
                const previousTypes = useSavedSelections ? (this.modalFilterSelections['modal-type-filter'] || []) : this.getSelectedFilterValues('modal-type-filter');

                const categoryOptions = [...new Set((this.schools || []).map(s => s.category).filter(Boolean))].sort((a, b) => a.localeCompare(b));
                this.createFilterOptions(catSelect, categoryOptions, previousCategories, useSavedSelections);
                this.updateModalSelectAllCheckbox('modal-cat-filter', 'modal-cat-select-all');

                const resOptions = [...new Set((this.schools || []).map(s => (s.status || '').trim()).filter(Boolean))].sort((a, b) => a.localeCompare(b));
                this.createFilterOptions(resSelect, resOptions, previousResStatuses, useSavedSelections);
                this.updateModalSelectAllCheckbox('modal-res-filter', 'modal-res-select-all');

                const regions = [...new Set((this.schools || []).map(s => s.region).filter(Boolean))].sort((a, b) => a.localeCompare(b));
                this.createFilterOptions(regionSelect, regions, previousRegions, useSavedSelections);
                this.updateModalSelectAllCheckbox('modal-region-filter', 'modal-region-select-all');

                const selectedRegions = this.getSelectedFilterValues('modal-region-filter');
                const selectedRegionSet = new Set(selectedRegions);
                const districts = [...new Set((this.schools || [])
                    .filter(s => selectedRegions.length === 0 || selectedRegionSet.has(s.region))
                    .map(s => s.district)
                    .filter(Boolean))].sort((a, b) => a.localeCompare(b));
                this.createFilterOptions(districtSelect, districts, previousDistricts, useSavedSelections);
                this.updateModalSelectAllCheckbox('modal-district-filter', 'modal-district-select-all');

                const programmeOptions = [...new Set((this.schools || []).flatMap(school => this.getSchoolProgramNames(school)))].sort((a, b) => a.localeCompare(b));
                this.createFilterOptions(programmeSelect, programmeOptions, previousProgrammes, useSavedSelections);
                this.updateModalSelectAllCheckbox('modal-programme-filter', 'modal-programme-select-all');

                const genderOptions = [...new Set((this.schools || []).map(s => s.gender).filter(Boolean))].sort((a, b) => a.localeCompare(b));
                this.createFilterOptions(genderSelect, genderOptions, previousGenders, useSavedSelections);
                this.updateModalSelectAllCheckbox('modal-gender-filter', 'modal-gender-select-all');

                const typeOptions = [...new Set((this.schools || []).map(s => s.type || 'SHS').filter(Boolean))].sort((a, b) => a.localeCompare(b));
                this.createFilterOptions(typeSelect, typeOptions, previousTypes, useSavedSelections);
                this.updateModalSelectAllCheckbox('modal-type-filter', 'modal-type-select-all');
            }

            filterModalList() {
                this.saveModalFilterSelections();
                this.populateModalFilterOptions();

                const search = document.getElementById('modal-search').value.toLowerCase();
                ['modal-cat-filter', 'modal-res-filter', 'modal-region-filter', 'modal-district-filter', 'modal-programme-filter', 'modal-gender-filter', 'modal-type-filter']
                    .forEach(id => this.updateModalSelectAllCheckbox(id, `modal-${id.split('-')[1]}-select-all`));

                this.updateModalFilterButtonBadges();

                const catFilters = this.getSelectedFilterValues('modal-cat-filter');
                const resFilters = this.getSelectedFilterValues('modal-res-filter');
                const regionFilters = this.getSelectedFilterValues('modal-region-filter');
                const districtFilters = this.getSelectedFilterValues('modal-district-filter');
                const programmeFilters = this.getSelectedFilterValues('modal-programme-filter');
                const genderFilters = this.getSelectedFilterValues('modal-gender-filter');
                const typeFilters = this.getSelectedFilterValues('modal-type-filter');

                const filtered = this.schools.filter(s => {
                    if (!s || !s.code || !String(s.code).trim() || !s.region || !String(s.region).trim()) return false;
                    const lowerCode = String(s.code).trim().toLowerCase();
                    const lowerRegion = String(s.region).trim().toLowerCase();
                    if (lowerCode === 'unknown' || lowerRegion === 'unknown') return false;
                    const searchText = `${s.name || ''} ${s.code || ''} ${s.location || ''} ${s.district || ''} ${s.region || ''} ${s.type || ''}`.toLowerCase();
                    const matchSearch = searchText.includes(search);
                    const matchCat = catFilters.length === 0 || catFilters.includes(s.category);
                    const matchRes = resFilters.length === 0 || resFilters.some(filter => (s.status || '').toLowerCase().includes(filter.toLowerCase()));
                    const matchRegion = regionFilters.length === 0 || regionFilters.includes(s.region);
                    const matchDistrict = districtFilters.length === 0 || districtFilters.includes(s.district);
                    const matchProgramme = programmeFilters.length === 0 || this.schoolMatchesSelectedProgram(s, programmeFilters);
                    const matchType = typeFilters.length === 0 || typeFilters.includes(s.type);
                    const matchGender = genderFilters.length === 0 || genderFilters.includes(s.gender);
                    return matchSearch && matchCat && matchRes && matchRegion && matchDistrict && matchProgramme && matchType && matchGender;
                });

                const listContainer = document.getElementById('modal-school-list');
                listContainer.innerHTML = '';

                if (filtered.length === 0) {
                    listContainer.innerHTML = `<div class="p-4 text-center text-slate-400">No matching schools found. Try adjusting search filters.</div>`;
                    return;
                }

                filtered.forEach(sch => {
                    const div = document.createElement('div');
                    div.className = "p-3 bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-400 rounded-xl flex items-center justify-between cursor-pointer transition";
                    div.onclick = () => {
                        const programContainer = document.getElementById('cand-program');
                        const currentProg = programContainer ? this.canonicalizeProgrammeValue(Array.from(programContainer.querySelectorAll('input[type="checkbox"][data-filter-item]')).filter(input => input.checked).map(input => input.value)[0] || 'GEN. SCI') : 'GEN. SCI';
                        const currentRes = this.selectedChoices[this.activeModalRankIndex]?.res || "Boarding";
                        this.selectedChoices[this.activeModalRankIndex] = { ...sch, prog: currentProg, res: currentRes };
                        this.closeSchoolModal();
                        this.renderSelectedTable();
                    };

                    const residenceLabel = (sch.status || '').toLowerCase();
                    const residenceBadge = residenceLabel.includes('day') && !residenceLabel.includes('boarding')
                        ? '<span class="px-2 py-1 bg-amber-100 text-amber-800 rounded font-bold text-[10px]">Day</span>'
                        : residenceLabel.includes('boarding') && !residenceLabel.includes('day')
                            ? '<span class="px-2 py-1 bg-emerald-100 text-emerald-800 rounded font-bold text-[10px]">Boarding</span>'
                            : '<span class="px-2 py-1 bg-sky-100 text-sky-800 rounded font-bold text-[10px]">Day/Boarding</span>';

                    const typeBadge = `<span class="px-2 py-1 rounded font-bold text-[10px] ${sch.type === 'TVET' ? 'bg-amber-100 text-amber-800' : sch.type === 'SHTS' ? 'bg-blue-100 text-blue-800' : sch.type === 'STEM' ? 'bg-fuchsia-100 text-fuchsia-800' : 'bg-slate-200 text-slate-800'}">${sch.type || 'SHS'}</span>`;
                    const programmeBadges = this.getSchoolProgramNames(sch).map(programme => `<span class="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold text-[10px]">${programme}</span>`).join('');

                    div.innerHTML = `
                        <div class="flex-1 pr-3">
                            <div class="font-bold text-slate-900 text-sm">${sch.name}</div>
                            ${this.renderSchoolDescriptors(sch)}
                            <div class="mt-2 flex flex-wrap gap-1">${programmeBadges}</div>
                        </div>
                        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-2 shrink-0">
                            <div class="flex items-center gap-1.5">
                                ${typeBadge}
                                ${residenceBadge}
                            </div>
                            <span class="px-2 py-1 bg-slate-200 text-slate-800 rounded font-bold text-xs">Cat ${sch.category}</span>
                        </div>
                    `;
                    listContainer.appendChild(div);
                });
            }

            toggleGradesModal() {
                const modal = document.getElementById('grades-modal');
                modal.classList.toggle('hidden');
            }

            normalizeSubjectLabel(value) {
                if (!value) return '';
                const cleaned = String(value).toUpperCase().replace(/[^A-Z]/g, '');
                if (cleaned.includes('AGRIC')) return 'AGRIC';
                if (cleaned.includes('BUS')) return 'BUS';
                if (cleaned.includes('HOMECON') || cleaned.includes('HECON')) return 'HOM. ECON.';
                if (cleaned.includes('VISUALARTS') || cleaned.includes('VISARTS')) return 'VIS. ARTS';
                if (cleaned.includes('GENARTS') || cleaned.includes('GENERALARTS')) return 'GEN. ARTS';
                if (cleaned.includes('GENSCI') || cleaned.includes('GENERALSCI')) return 'GEN. SCI';
                if (/TVET|TECH|VOCATIONAL|APPLIEDTECH|ELECTRICAL|MECHANICAL|BUILDINGTECH|WOODWORK|AUTOMOTIVE|FOODPROCESSING/.test(cleaned)) return 'TECH';
                if (/STEM|SCIENCETECH|BIOMEDICAL|MEDICALSCI|COMPUTERSCI|ENGINEERING|AEROSPACE|ROBOTICS/.test(cleaned)) return 'STEM';
                return '';
            }

            inferProgramsFromSubjectMarks(pageItems, codeItem, fullSnippet, type, rowItems = null) {
                let progs = [];
                const normalizedSnippet = (fullSnippet || '').toUpperCase();
                const programPatterns = [
                    { name: 'GEN. SCI', regex: /GEN(?:ERAL)?\s*SCI(?:ENCE)?/i },
                    { name: 'GEN. ARTS', regex: /GEN(?:ERAL)?\s*ARTS?/i },
                    { name: 'BUS', regex: /BUS(?:INESS)?/i },
                    { name: 'HOM. ECON.', regex: /HOM(?:E)?\.??\s*ECON(?:OMICS)?/i },
                    { name: 'VIS. ARTS', regex: /VIS(?:UAL)?\s*ARTS?/i },
                    { name: 'AGRIC', regex: /AGRIC(?:ULTURE|ULTURAL)?/i },
                    { name: 'TECH', regex: /TECH(?:NICAL|NICAL)?/i },
                    { name: 'STEM', regex: /STEM/i }
                ];

                programPatterns.forEach(pattern => {
                    if (pattern.regex.test(normalizedSnippet)) {
                        progs.push(pattern.name);
                    }
                });

                const aliasPatterns = [
                    { name: 'STEM', regex: /(?:STEM(?:\s*[-/\s]\s*TECH)?|SCIENCE\s*[-/\s]?\s*TECH|BIO(?:-?MEDICAL)?\s*SCI(?:ENCE)?|MEDICAL\s*SCI(?:ENCE)?|HEALTH\s*SCI(?:ENCE)?|COMPUTER\s*SCI(?:ENCE)?|AEROSPACE|ROBOTICS|ENGINEERING|PHARMACEUTICAL)/i },
                    { name: 'TECH', regex: /(?:PUBLIC\s*TVET|TVET|TECH(?:NICAL|NICAL)?|VOCATIONAL|APPLIED\s*TECH|ELECTRICAL|MECHANICAL|AUTOMOTIVE|BUILDING\s*TECH|FOOD\s*PROCESSING|HOSPITALITY|WOODWORK|COSMETOLOGY)/i },
                    { name: 'GEN. SCI', regex: /(?:GEN(?:ERAL)?\s*SCI(?:ENCE)?|BIO(?:-?MEDICAL)?\s*SCI(?:ENCE)?|MEDICAL\s*SCI(?:ENCE)?|HEALTH\s*SCI(?:ENCE)?|COMPUTER\s*SCI(?:ENCE)?|AGRIC(?:ULTURE|ULTURAL)?\s*SCI(?:ENCE)?)/i },
                    { name: 'AGRIC', regex: /AGRIC(?:ULTURE|ULTURAL)?|AGRO(?:-?FORESTRY)?|CROP\s*SCI(?:ENCE)?|ANIMAL\s*SCI(?:ENCE)?/i },
                    { name: 'BUS', regex: /BUS(?:INESS)?|ACCOUNTING|FINANCE|MARKETING/i },
                    { name: 'HOM. ECON.', regex: /HOM(?:E)?\.?\s*ECON(?:OMICS)?|FOOD\s*PREPARATION|TEXTILES|CATERING/i },
                    { name: 'VIS. ARTS', regex: /VIS(?:UAL)?\s*ARTS?|GRAPHIC\s*DESIGN|DRAFTING/i },
                    { name: 'GEN. ARTS', regex: /GEN(?:ERAL)?\s*ARTS?|HUMANITIES|SOCIAL\s*SCI(?:ENCE)?/i }
                ];

                aliasPatterns.forEach(pattern => {
                    if (pattern.regex.test(normalizedSnippet)) {
                        progs.push(pattern.name);
                    }
                });

                const sourceItems = rowItems || pageItems || [];
                const subjectColumns = [];
                for (const item of sourceItems) {
                    const label = this.normalizeSubjectLabel(item.str);
                    if (!label) continue;
                    if (subjectColumns.some(col => Math.abs(col.x - item.x) < 20 && Math.abs(col.y - item.y) < 12)) continue;
                    subjectColumns.push({ name: label, x: item.x, y: item.y });
                }

                if (codeItem && subjectColumns.length) {
                    const rowY = codeItem.y;
                    const marks = [];
                    for (const item of sourceItems) {
                        if ((item.str || '').trim().toUpperCase() !== 'X') continue;
                        if (Math.abs(item.y - rowY) > 22) continue;

                        let bestColumn = null;
                        let bestDistance = Infinity;
                        for (const column of subjectColumns) {
                            const distance = Math.abs(item.x - column.x);
                            if (distance < bestDistance) {
                                bestDistance = distance;
                                bestColumn = column.name;
                            }
                        }

                        if (bestColumn && bestDistance <= 26) {
                            marks.push(bestColumn);
                        }
                    }

                    progs = [...new Set([...progs, ...marks])];
                }

                if (progs.length === 0) {
                    progs = ["GEN. SCI", "GEN. ARTS", "BUS"];
                    if (type === "TVET") progs = ["TECH", "BUS", "GEN. SCI"];
                    else if (type === "STEM") progs = ["STEM", "GEN. SCI"];
                } else {
                    if (type === "TVET" && !progs.includes("TECH")) progs.unshift("TECH");
                    if (type === "STEM" && !progs.includes("STEM")) progs.unshift("STEM");
                    if (!progs.includes("GEN. SCI")) progs.push("GEN. SCI");
                    if (!progs.includes("GEN. ARTS")) progs.push("GEN. ARTS");
                    if (!progs.includes("BUS")) progs.push("BUS");
                }

                return [...new Set(progs)];
            }

            groupPageItemsByRow(pageItems, tolerance = 8) {
                const rows = [];
                const grouped = new Map();

                for (const item of pageItems || []) {
                    const text = (item.str || '').trim();
                    if (!text) continue;
                    const rowKey = Math.round(item.y / tolerance) * tolerance;
                    if (!grouped.has(rowKey)) grouped.set(rowKey, []);
                    grouped.get(rowKey).push(item);
                }

                for (const rowItems of grouped.values()) {
                    rowItems.sort((a, b) => a.x - b.x);
                    rows.push(rowItems);
                }

                rows.sort((a, b) => (a[0]?.y || 0) - (b[0]?.y || 0));
                return rows;
            }

            extractRightContext(rowItems, codeItem, maxWidth = 280) {
                return (rowItems || [])
                    .filter(item => item.x > codeItem.x + 12 && item.x < codeItem.x + maxWidth)
                    .map(item => (item.str || '').trim())
                    .filter(Boolean)
                    .join(' ');
            }

            async loadDefaultRegisterFromJson() {
                await this.loadProgrammeDefinitions();
                const statusBox = document.getElementById('pdf-parse-status');
                const statusMsg = document.getElementById('pdf-parse-message');
                const spinner = document.getElementById('pdf-spinner');
                const progressBar = document.getElementById('pdf-progress-bar');

                if (statusBox) statusBox.classList.remove('hidden');
                if (spinner) spinner.className = "fa-solid fa-circle-notch fa-spin text-emerald-400";
                if (statusMsg) statusMsg.textContent = 'Loading static school registry...';
                if (progressBar) progressBar.style.width = '10%';

                try {
                    const response = await fetch('./data/schools_all.json');
                    if (!response.ok) throw new Error(`Unable to load static JSON register (${response.status})`);
                    const payload = await response.json();
                    const list = Array.isArray(payload) ? payload : Array.isArray(payload.schools) ? payload.schools : [];
                    const normalized = (list || []).filter(Boolean).map(s => {
                        const code = String(s.code || '').trim();
                        const region = String(s.region || 'Unknown').trim();
                        const district = String(s.district || 'Unknown District').trim();
                        const name = String(s.name || 'Unknown School').trim();
                        const progs = Array.isArray(s.progs) ? s.progs : (s.progs ? [s.progs] : ['GEN. SCI']);
                        const programNames = Array.isArray(s.programNames) && s.programNames.length ? s.programNames : [...new Set(progs)];
                        return {
                            ...s,
                            code,
                            name,
                            region,
                            district,
                            location: s.location || this.buildLocationLabel(region, district),
                            progs,
                            programNames,
                            status: s.status || 'Day/Boarding',
                            gender: s.gender || 'Mixed',
                            type: s.type || 'SHS',
                            category: s.category || 'B'
                        };
                    }).filter(s => s.code && s.region && s.region !== 'Unknown');

                    if (!normalized.length) {
                        throw new Error('Static JSON register is empty');
                    }

                    this._excelParsedSchools = normalized;
                    this._canonicalSchoolLookup = this.buildCanonicalSchoolLookup(normalized);
                    this.datasetSchoolCount = normalized.length;
                    this.datasetPreference = 'EXCEL';
                    this.selectedChoices = [];
                    this.updateCountDisplay();

                    if (spinner) spinner.className = "fa-solid fa-check text-emerald-400";
                    if (statusMsg) statusMsg.textContent = `Loaded ${normalized.length} schools from static JSON registry.`;
                    if (progressBar) progressBar.style.width = '100%';
                    document.getElementById('dataset-status-badge').innerHTML = `<i class="fa-solid fa-circle-check text-amber-300"></i> ${normalized.length} Loaded / ${this.filterValidSchoolEntries(normalized).length} Active (JSON)`;
                    this.applyDatasetPreference();
                    return normalized;
                } catch (err) {
                    console.warn('Static JSON register load failed. Falling back to Excel/PDF source parsing:', err);
                    if (statusMsg) statusMsg.textContent = 'Static JSON registry unavailable. Falling back to source parsing...';
                    if (progressBar) progressBar.style.width = '100%';
                    throw err;
                }
            }

            buildCanonicalSchoolLookup(schools = []) {
                const map = new Map();
                for (const school of schools || []) {
                    const code = String(school && school.code || '').trim();
                    if (!code) continue;
                    const progs = Array.isArray(school.progs) && school.progs.length ? school.progs : ['GEN. SCI'];
                    const programNames = Array.isArray(school.programNames) && school.programNames.length
                        ? school.programNames
                        : [...new Set(progs)];
                    map.set(code, {
                        ...school,
                        code,
                        name: String(school.name || 'Unknown School').trim(),
                        region: String(school.region || 'Unknown').trim(),
                        district: String(school.district || 'District Central').trim(),
                        location: String(school.location || this.buildLocationLabel(school.region, school.district)).trim(),
                        progs: [...new Set(progs)],
                        programNames: [...new Set(programNames)],
                        status: String(school.status || 'Day/Boarding').trim(),
                        gender: String(school.gender || 'Mixed').trim(),
                        type: String(school.type || 'SHS').trim(),
                        category: String(school.category || 'B').trim()
                    });
                }
                return map;
            }

            mergeUploadWithCanonicalRegistry(parsedSchools, preferredSchools = null) {
                const preferred = Array.isArray(preferredSchools) && preferredSchools.length
                    ? preferredSchools
                    : (Array.isArray(this._excelParsedSchools) && this._excelParsedSchools.length ? this._excelParsedSchools : []);
                const canonicalMap = this._canonicalSchoolLookup || this.buildCanonicalSchoolLookup(preferred);
                const mergedMap = new Map();

                for (const school of parsedSchools || []) {
                    const code = String(school && school.code || '').trim();
                    if (!code) continue;
                    const canonical = canonicalMap.get(code);
                    const progs = Array.isArray(canonical && canonical.progs) && canonical.progs.length
                        ? canonical.progs
                        : (Array.isArray(school.progs) && school.progs.length ? school.progs : ['GEN. SCI']);
                    const programNames = Array.isArray(canonical && canonical.programNames) && canonical.programNames.length
                        ? canonical.programNames
                        : (Array.isArray(school.programNames) && school.programNames.length ? school.programNames : [...new Set(progs)]);
                    mergedMap.set(code, {
                        ...school,
                        ...canonical,
                        code,
                        name: String((canonical && canonical.name) || school.name || 'Unknown School').trim(),
                        region: String((canonical && canonical.region) || school.region || 'Unknown').trim(),
                        district: String((canonical && canonical.district) || school.district || 'District Central').trim(),
                        location: String((canonical && canonical.location) || school.location || this.buildLocationLabel((canonical && canonical.region) || school.region, (canonical && canonical.district) || school.district)).trim(),
                        category: String((canonical && canonical.category) || school.category || 'B').trim(),
                        status: String((canonical && canonical.status) || school.status || 'Day/Boarding').trim(),
                        gender: String((canonical && canonical.gender) || school.gender || 'Mixed').trim(),
                        type: String((canonical && canonical.type) || school.type || 'SHS').trim(),
                        progs: [...new Set(progs)],
                        programNames: [...new Set(programNames)]
                    });
                }

                for (const canonicalSchool of preferred || []) {
                    const code = String(canonicalSchool && canonicalSchool.code || '').trim();
                    if (!code || mergedMap.has(code)) continue;
                    mergedMap.set(code, {
                        ...canonicalSchool,
                        code,
                        location: canonicalSchool.location || this.buildLocationLabel(canonicalSchool.region, canonicalSchool.district),
                        progs: Array.isArray(canonicalSchool.progs) ? [...new Set(canonicalSchool.progs)] : ['GEN. SCI'],
                        programNames: Array.isArray(canonicalSchool.programNames) && canonicalSchool.programNames.length ? [...new Set(canonicalSchool.programNames)] : [...new Set(Array.isArray(canonicalSchool.progs) ? canonicalSchool.progs : ['GEN. SCI'])]
                    });
                }

                return Array.from(mergedMap.values())
                    .filter(s => s && s.code && String(s.code).trim())
                    .sort((a, b) => String(a.code).localeCompare(String(b.code)));
            }

            async useBundledRegistryFallback(reason) {
                const statusMsg = document.getElementById('pdf-parse-message');
                const spinner = document.getElementById('pdf-spinner');
                const progressBar = document.getElementById('pdf-progress-bar');
                const statusBox = document.getElementById('pdf-parse-status');

                if (statusBox) statusBox.classList.remove('hidden');
                if (spinner) spinner.className = "fa-solid fa-database text-emerald-400";
                if (statusMsg) statusMsg.textContent = reason;
                if (progressBar) progressBar.style.width = '100%';

                try {
                    const schools = await this.loadDefaultRegisterFromJson();
                    this.datasetPreference = 'EXCEL';
                    if (document.getElementById('dataset-select')) {
                        document.getElementById('dataset-select').value = 'EXCEL';
                    }
                    this.saveStateToStorage();
                    this.applyDatasetPreference();
                    if (statusMsg) {
                        statusMsg.textContent = `${reason} Using canonical bundled registry (${schools.length} schools).`;
                    }
                    return true;
                } catch (err) {
                    console.warn('Bundled registry fallback failed:', err);
                    if (statusMsg) {
                        statusMsg.textContent = 'Upload parsing was incomplete and the bundled registry could not be restored.';
                    }
                    return false;
                }
            }

            /**
             * COMPLETE NON-BLOCKING 52-PAGE PDF PARSER
             * Processes all pages seamlessly, extracts 7-digit school codes, regions,
             * districts, categories, and attributes while keeping the UI fully responsive.
             */
            async loadDefaultRegister() {
                try {
                    await this.loadDefaultRegisterFromJson();
                    if (document.getElementById('dataset-select')) document.getElementById('dataset-select').value = 'EXCEL';
                    return;
                } catch (err) {
                    console.warn('JSON register unavailable, falling back to preferred source parser:', err);
                }

                const pref = (this.datasetPreference || 'EXCEL').toUpperCase();
                if (pref === 'PDF') {
                    try {
                        await this.loadDefaultRegisterFromPdf();
                        return;
                    } catch (err) {
                        console.warn('PDF register load failed, falling back to Excel:', err);
                    }
                }

                try {
                    await this.loadDefaultRegisterFromExcel();
                    if (pref === 'PDF') {
                        this.datasetPreference = 'EXCEL';
                        if (document.getElementById('dataset-select')) document.getElementById('dataset-select').value = 'EXCEL';
                    }
                    return;
                } catch (err) {
                    console.warn('Excel register load failed, falling back to PDF:', err);
                }

                if (pref !== 'PDF') {
                    try {
                        await this.loadDefaultRegisterFromPdf();
                        this.datasetPreference = 'PDF';
                        if (document.getElementById('dataset-select')) document.getElementById('dataset-select').value = 'PDF';
                        return;
                    } catch (err) {
                        console.warn('PDF register load failed after Excel fallback:', err);
                    }
                }

                const statusBox = document.getElementById('pdf-parse-status');
                const statusMsg = document.getElementById('pdf-parse-message');
                const spinner = document.getElementById('pdf-spinner');
                const progressBar = document.getElementById('pdf-progress-bar');
                if (statusBox) {
                    spinner.className = "fa-solid fa-triangle-exclamation text-amber-400";
                    statusMsg.textContent = "Default register load failed. Using bundled fallback schools.";
                    progressBar.style.width = `100%`;
                }
            }

            async ensurePreferredDatasetLoaded() {
                const pref = (this.datasetPreference || 'EXCEL').toUpperCase();
                if (pref === 'EXCEL' && (!this._excelParsedSchools || !this._excelParsedSchools.length)) {
                    try {
                        await this.loadDefaultRegisterFromExcel();
                        this.datasetPreference = 'EXCEL';
                        if (document.getElementById('dataset-select')) document.getElementById('dataset-select').value = 'EXCEL';
                    } catch (err) {
                        console.warn('Could not load Excel dataset on preference:', err);
                    }
                } else if (pref === 'PDF' && (!this._pdfParsedSchools || !this._pdfParsedSchools.length)) {
                    try {
                        await this.loadDefaultRegisterFromPdf();
                        this.datasetPreference = 'PDF';
                        if (document.getElementById('dataset-select')) document.getElementById('dataset-select').value = 'PDF';
                    } catch (err) {
                        console.warn('Could not load PDF dataset on preference:', err);
                    }
                }
            }

            async loadDefaultRegisterFromExcel() {
                if (typeof XLSX === 'undefined') {
                    throw new Error('SheetJS library is not available');
                }

                await this.loadProgrammeDefinitions();

                const statusBox = document.getElementById('pdf-parse-status');
                const statusMsg = document.getElementById('pdf-parse-message');
                const progressBar = document.getElementById('pdf-progress-bar');
                const spinner = document.getElementById('pdf-spinner');
                this.parseLogger.clear();
                this.parseLog = [];
                this.parseErrors = [];
                this.parseLogger.step('Starting default Excel register load', { url: this.defaultRegisterUrlXlsx });

                statusBox.classList.remove('hidden');
                spinner.className = "fa-solid fa-circle-notch fa-spin text-emerald-400";
                statusMsg.textContent = "Loading default Excel school register...";
                progressBar.style.width = `10%`;

                try {
                    // ensure prior parsed cache cleared so switches re-trigger network fetch
                    this._excelParsedSchools = [];
                    // cache-bust default Excel fetch so updated uploads are always picked up
                    const cacheBustedUrl = this.defaultRegisterUrlXlsx + (this.defaultRegisterUrlXlsx.includes('?') ? '&' : '?') + 't=' + Date.now();
                    const response = await fetch(cacheBustedUrl, { cache: 'no-store' });
                    if (!response.ok) throw new Error(`Unable to load default Excel register (${response.status})`);
                    const arrayBuffer = await response.arrayBuffer();
                    this.parseLogger.step('Excel file fetched', { bytes: arrayBuffer.byteLength });
                    const workbook = XLSX.read(arrayBuffer, { type: 'array', raw: false, cellDates: true });
                    this.parseLogger.step('Workbook parsed', { sheetCount: workbook.SheetNames.length, sheetNames: workbook.SheetNames });
                    statusMsg.textContent = `Parsing Excel workbook (1 of ${workbook.SheetNames.length} sheets)...`;
                    progressBar.style.width = `5%`;
                    const parsedArray = this.parseExcelWorkbook(workbook);

                    if (parsedArray.length === 0) {
                        throw new Error('No schools were parsed from Excel workbook');
                    }

                    const validParsedSchools = parsedArray.filter(s => s && s.code && String(s.code).trim());
                    this._excelParsedSchools = validParsedSchools.map(s => ({
                        ...s,
                        location: s.location || this.buildLocationLabel(s.region, s.district)
                    }));
                    this.datasetSchoolCount = this._excelParsedSchools.length;
                    this.parseLogger.step('Excel dataset validated', { parsedCount: this._excelParsedSchools.length, invalidCount: parsedArray.length - validParsedSchools.length });
                    this.selectedChoices = [];
                    this.updateCountDisplay();

                    spinner.className = "fa-solid fa-check text-emerald-400";
                    const sheetsParsed = this._excelSheetsParsed || 0;
                    statusMsg.textContent = `Loaded ${this._excelParsedSchools.length} schools from Excel register (parsed ${sheetsParsed} of ${workbook.SheetNames.length} sheets).`;
                    progressBar.style.width = `100%`;
                    const activeExcelCount = this.filterValidSchoolEntries(this._excelParsedSchools.map(s => ({ ...s }))).length;
                    document.getElementById('dataset-status-badge').innerHTML = `<i class="fa-solid fa-circle-check text-amber-300"></i> ${this._excelParsedSchools.length} Loaded / ${activeExcelCount} Active (Excel)`;
                    this.applyDatasetPreference();
                } catch (err) {
                    this.parseLogger.error('Excel parse failed', { message: err && err.message ? err.message : String(err), stack: err && err.stack ? err.stack : null });
                    this.parseErrors.push({ ts: new Date().toISOString(), source: 'excel', message: err && err.message ? err.message : String(err), stack: err && err.stack ? err.stack : null });
                    console.error('[Excel parse] Failed', err);
                    throw err;
                }
            }

            async loadProgrammeDefinitions() {
                if (this.programmeDefinitions) return this.programmeDefinitions;

                const fallback = {
                    programmes: [
                        { code: '101', canonical: 'AGRIC', display: 'AGRICULTURE', aliases: ['AGRIC', 'AGRICULTURE'] },
                        { code: '201', canonical: 'BUS', display: 'BUSINESS', aliases: ['BUS', 'BUSINESS'] },
                        { code: '301', canonical: 'TECH', display: 'TECHNICAL', aliases: ['TECH', 'TECHNICAL', 'TVET'] },
                        { code: '401', canonical: 'HOM. ECON.', display: 'HOME ECONOMICS', aliases: ['HOM.', 'HOM. ECON.', 'HOME ECONOMICS'] },
                        { code: '402', canonical: 'VIS. ARTS', display: 'VISUAL ARTS', aliases: ['VIS.', 'VIS. ARTS', 'VISUAL ARTS'] },
                        { code: '501', canonical: 'GEN. ARTS', display: 'GENERAL ARTS', aliases: ['GEN. ARTS', 'GENERAL ARTS'] },
                        { code: '502', canonical: 'GEN. SCI', display: 'GENERAL SCIENCE', aliases: ['GEN. SCI', 'GENERAL SCIENCE'] },
                        { code: '503', canonical: 'STEM', display: 'STEM', aliases: ['STEM'] },
                        { code: '504', canonical: 'GEN. ARTS', display: 'LANGUAGES', aliases: ['LANG', 'LANGUAGES'] }
                    ],
                    expandedPrograms: [],
                    tradeGroups: ['ENGINEERING TRADES', 'BUILDING TRADES', 'BUSINESS']
                };

                try {
                    const response = await fetch(this.programmesUrl);
                    if (!response.ok) throw new Error(`Unable to load programme definitions (${response.status})`);
                    this.programmeDefinitions = await response.json();
                    // attempt to load programme -> track mapping generated from Excel appendices
                    try {
                        const mapResp = await fetch('data/programme_track_map.json');
                        if (mapResp.ok) {
                            const mapJson = await mapResp.json();
                            this.programmeTrackMap = mapJson && mapJson.mappings ? mapJson.mappings : {};
                        } else {
                            this.programmeTrackMap = {};
                        }
                    } catch (e) {
                        this.programmeTrackMap = {};
                    }
                } catch (err) {
                    console.warn('Programme definitions unavailable; using built-in definitions.', err);
                    this.programmeDefinitions = fallback;
                }
                return this.programmeDefinitions;
            }

            parseExcelWorkbook(workbook) {
                const parsed = [];
                const programmeDefinitions = this.programmeDefinitions || { programmes: [], expandedPrograms: [], tradeGroups: [] };
                const programmeByCode = Object.fromEntries((programmeDefinitions.programmes || []).map(item => [String(item.code), item]));
                const programmeEntries = [
                    ...(programmeDefinitions.programmes || []),
                    ...(programmeDefinitions.expandedPrograms || [])
                ];
                const normalizeHeader = value => String(value || '').replace(/\s+/g, ' ').trim().toUpperCase();
                const headerMatchesProgramme = header => {
                    const normalized = normalizeHeader(header);
                    if (!normalized) return null;
                    return programmeEntries.find(item => (item.aliases || []).some(alias => {
                        const aliasText = normalizeHeader(alias);
                        return normalized === aliasText || normalized.includes(aliasText);
                    })) || null;
                };

                const normalizeProgramLabel = label => {
                    if (!label) return null;
                    const match = headerMatchesProgramme(label);
                    if (match) return match.canonical;
                    const value = normalizeHeader(label);
                    if (value.includes('SCIENCE')) return 'GEN. SCI';
                    if (value.includes('ARTS')) return 'GEN. ARTS';
                    if (value.includes('TECH')) return 'TECH';
                    if (value.includes('BUS')) return 'BUS';
                    if (value.includes('AGRIC')) return 'AGRIC';
                    if (value.includes('STEM')) return 'STEM';
                    return null;
                };

                // Build appendix sheet lookup for 'APPENDIX N' sheets so we can extract detailed program lists
                const appendixSheets = {};
                const appendixCandidates = [];
                try {
                    for (const name of workbook.SheetNames) {
                        const sheet = workbook.Sheets[name];
                        const uname = String(name || '').toUpperCase();
                        const m = uname.match(/APPENDIX\s*(\d+)/);
                        if (m) {
                            appendixSheets[m[1]] = sheet;
                        } else if (uname.includes('APPENDIX')) {
                            const m2 = uname.match(/(\d+)/);
                            if (m2) appendixSheets[m2[1]] = sheet;
                            else appendixCandidates.push(sheet);
                        } else {
                            // scan first 40 rows for appendix-like markers or many school codes
                            try {
                                const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: false, defval: null, range: 0 });
                                const sampleText = rows.slice(0, 40).map(r => (r || []).join(' ')).join('\n').toUpperCase();
                                if (/APPENDIX|DETAILED TECHNICAL|TECHNICAL PROGRAMME|PROGRAMME|PROGRAMS|PROGRAMMES|APPENDIX\s*\d+/.test(sampleText)) {
                                    // try to pick up appendix number inside sheet content
                                    const m3 = sampleText.match(/APPENDIX\s*(\d+)/);
                                    if (m3) appendixSheets[m3[1]] = sheet;
                                    else appendixCandidates.push(sheet);
                                } else {
                                    // count occurrences of 7-digit school codes in the sheet sample
                                    const codeCount = (sampleText.match(/\b\d{7}\b/g) || []).length;
                                    if (codeCount >= 3) appendixCandidates.push(sheet);
                                }
                            } catch (e) {
                                // ignore per-sheet errors
                            }
                        }
                    }
                } catch (e) {
                    // ignore overall appendix detection errors
                }

                const parseProgramsFromAppendix = (appendixSheet, schoolCode) => {
                    if (!appendixSheet) return [];
                    try {
                        const rows = XLSX.utils.sheet_to_json(appendixSheet, { header: 1, raw: false, defval: null });
                        if (!rows || !rows.length) return [];

                        const normalizeCell = value => {
                            let normalized = String(value || '').trim().replace(/^['"]+|['"]+$/g, '').replace(/\u00A0/g, ' ').trim();
                            if (/^\d+(?:\.0+)$/.test(normalized)) {
                                normalized = normalized.replace(/\.0+$/, '');
                            }
                            return normalized;
                        };
                        const isMarker = value => {
                            const normalized = normalizeCell(value).toUpperCase();
                            return ['X', '✔', '✓', '1', 'Y', 'YES'].includes(normalized);
                        };
                        const isGenericField = value => {
                            const normalized = normalizeCell(value).toUpperCase();
                            return /^(?:S\/N|SN|REGION|DISTRICT|INST\.? CODE|INSTITUTION|SCHOOL|NAME OF SCHOOL|ALL SENIOR HIGH\/? TECH SCHOOLS|LOCATION|GENDER|STATUS|CATEGORY|TYPE|CODE|APPENDIX|SUBJECT|SPECIFIC TECHNICAL SUBJECT|STEM SUBJECTS|LIST OF SECOND CYCLE INSTITUTIONS)$/i.test(normalized);
                        };
                        const expandMergedRows = (sheet, rows) => {
                            const matrix = rows.map(row => [...(row || [])]);
                            const merges = (sheet && sheet['!merges']) || [];
                            for (const merge of merges) {
                                const anchorValue = rows[merge.s.r] && rows[merge.s.r][merge.s.c];
                                if (anchorValue == null) continue;
                                for (let r = merge.s.r; r <= merge.e.r; r++) {
                                    if (!matrix[r]) matrix[r] = [];
                                    for (let c = merge.s.c; c <= merge.e.c; c++) {
                                        matrix[r][c] = anchorValue;
                                    }
                                }
                            }
                            return matrix;
                        };
                        const isProgramHeaderRow = row => {
                            if (!row || row.length < 7) return false;
                            const normalized = row.map(normalizeCell);
                            const startCells = normalized.slice(0, 6);
                            const metadataCount = startCells.filter(cell => cell && (isGenericField(cell) || /^\d+$/.test(cell))).length;
                            const candidateProgramCells = normalized.slice(5).filter(cell => cell && !isGenericField(cell));
                            return metadataCount >= 2 && candidateProgramCells.length >= 4;
                        };

                        const expandedRows = expandMergedRows(appendixSheet, rows);
                        const normalizedRows = expandedRows.map(row => (row || []).map(normalizeCell));
                        const headerRows = normalizedRows.slice(0, Math.min(normalizedRows.length, 10));
                        const programHeaderMap = {};
                        const maxCols = Math.max(...headerRows.map(row => row.length));
                        for (let ci = 0; ci < maxCols; ci++) {
                            const candidates = [];
                            for (const row of headerRows) {
                                const cell = row[ci];
                                if (!cell) continue;
                                if (isGenericField(cell) || /^\d+$/.test(cell)) continue;
                                if (!/[A-Za-z]/.test(cell)) continue;
                                candidates.push(cell);
                            }
                            const label = candidates.join(' ').replace(/\s+/g, ' ').trim();
                            if (label) {
                                programHeaderMap[ci] = label;
                            }
                        }

                        const targetCode = String(schoolCode || '').replace(/\.0+$/, '').trim();
                        for (const row of normalizedRows) {
                            if (!row) continue;
                            const codeIndex = row.findIndex(cell => cell === targetCode);
                            if (codeIndex === -1) continue;

                            const programs = [];
                            for (let ci = 0; ci < rowData.length; ci++) {
                                if (ci === codeIndex) continue;
                                const cellValue = rowData[ci];
                                if (!cellValue) continue;

                                if (programHeaderMap[ci] && isMarker(cellValue)) {
                                    programs.push(programHeaderMap[ci]);
                                    continue;
                                }

                                if (/^appendix/i.test(cellValue)) continue;
                                if (/refer to|detailed|programme?s?/i.test(cellValue)) continue;
                                if (/^(?:MIXED|MALES|FEMALES|DAY\/BOARDING|DAY|BOARDING|TVET|SHTS|SHS)$/i.test(cellValue)) continue;
                                if (/^\d{1,4}$/.test(cellValue)) continue;
                                if (/^(?:[A-Z]{1,3}\.|\w+\s+INSTITUTE?)$/i.test(cellValue) && ci < codeIndex) continue;
                                programs.push(cellValue);
                            }
                            return [...new Set(programs)];
                        }
                        return [];
                    } catch (e) {
                        return [];
                    }
                };

                const findProgramsForCode = (appendixNum, schoolCode) => {
                    if (appendixNum) {
                        const sheet = appendixSheets[appendixNum];
                        const res = parseProgramsFromAppendix(sheet, schoolCode);
                        if (res && res.length) return res;
                    }
                    // search annotated appendix sheets first
                    for (const key in appendixSheets) {
                        const res = parseProgramsFromAppendix(appendixSheets[key], schoolCode);
                        if (res && res.length) return res;
                    }
                    // search candidate sheets
                    for (const sheet of appendixCandidates) {
                        const res = parseProgramsFromAppendix(sheet, schoolCode);
                        if (res && res.length) return res;
                    }
                    return [];
                };

                const programmeDisplayName = label => {
                    const match = headerMatchesProgramme(label);
                    return match ? match.display : null;
                };

                const extractHeaderLabel = combined => {
                    if (!combined) return '';
                    const cleaned = combined.replace(/\b(101|201|301|401|402|501|502|503|504|[6-9]\d{2})\b/g, ' ').replace(/\s+/g, ' ').trim();
                    if (cleaned && /[A-Za-z]/.test(cleaned)) return cleaned;
                    return combined.trim();
                };

                const expandMergedHeaders = (sheet, rows, headerIndex) => {
                    const startRow = Math.max(0, headerIndex - 3);
                    const headers = rows.slice(startRow, Math.min(rows.length, headerIndex + 6)).map(row => [...(row || [])]);
                    const merges = (sheet && sheet['!merges']) || [];
                    for (const merge of merges) {
                        if (merge.e.r < startRow || merge.s.r >= startRow + headers.length) continue;
                        const anchorRow = merge.s.r - startRow;
                        const anchorValue = headers[anchorRow] && headers[anchorRow][merge.s.c];
                        if (!anchorValue) continue;
                        for (let rowIndex = Math.max(0, merge.s.r - startRow); rowIndex <= Math.min(headers.length - 1, merge.e.r - startRow); rowIndex++) {
                            for (let colIndex = merge.s.c; colIndex <= merge.e.c; colIndex++) {
                                headers[rowIndex][colIndex] = anchorValue;
                            }
                        }
                    }
                    return headers;
                };

                const totalSheets = workbook.SheetNames.length;
                let sheetsParsed = 0;
                const sheetDiagnostics = [];
                this.parseLogger.step('Starting workbook sheet scan', { totalSheets });
                for (let sheetIndex = 0; sheetIndex < totalSheets; sheetIndex++) {
                    const sheetName = workbook.SheetNames[sheetIndex];
                    const sheet = workbook.Sheets[sheetName];
                    this.parseLogger.step(`Sheet ${sheetIndex + 1}/${totalSheets}: ${sheetName} scan started`, { sheetName, ref: sheet && sheet['!ref'] ? sheet['!ref'] : null });
                    let rows = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: false, defval: null });
                    // If sheet_to_json produced no rows (merged cells, odd layouts),
                    // reconstruct a matrix from raw sheet cell addresses.
                    if (!rows || rows.length < 1) {
                        this.parseLogger.warn(`Sheet ${sheetName} produced no rows from sheet_to_json; reconstructing raw cell matrix`, { sheetName, ref: sheet && sheet['!ref'] ? sheet['!ref'] : null });
                        try {
                            const reconstructed = [];
                            let range = null;
                            if (sheet && sheet['!ref']) {
                                range = XLSX.utils.decode_range(sheet['!ref']);
                            } else {
                                // compute range from cell addresses
                                let maxR = 0, maxC = 0, minR = Infinity, minC = Infinity;
                                for (const addr in sheet) {
                                    if (!Object.prototype.hasOwnProperty.call(sheet, addr)) continue;
                                    if (addr[0] === '!') continue;
                                    try {
                                        const dec = XLSX.utils.decode_cell(addr);
                                        if (dec.r > maxR) maxR = dec.r;
                                        if (dec.c > maxC) maxC = dec.c;
                                        if (dec.r < minR) minR = dec.r;
                                        if (dec.c < minC) minC = dec.c;
                                    } catch (e) {
                                        // ignore
                                    }
                                }
                                if (minR === Infinity) {
                                    // truly empty
                                    range = null;
                                } else {
                                    range = { s: { r: minR, c: minC }, e: { r: maxR, c: maxC } };
                                }
                            }

                            if (range) {
                                for (let r = range.s.r; r <= range.e.r; r++) {
                                    const rowArr = [];
                                    for (let c = range.s.c; c <= range.e.c; c++) {
                                        const addr = XLSX.utils.encode_cell({ r, c });
                                        const cellObj = sheet[addr];
                                        let val = null;
                                        if (cellObj) {
                                            if (cellObj.w !== undefined && cellObj.w !== null) val = String(cellObj.w);
                                            else if (cellObj.v !== undefined && cellObj.v !== null) val = String(cellObj.v);
                                            else val = '';
                                        }
                                        rowArr.push(val);
                                    }
                                    reconstructed.push(rowArr);
                                }
                            }

                            if (reconstructed.length > 0) {
                                rows = reconstructed;
                                this.parseLogger.step(`Raw matrix reconstruction succeeded for ${sheetName}`, { rows: reconstructed.length, cols: reconstructed[0] ? reconstructed[0].length : 0 });
                            } else {
                                this.parseLogger.warn(`Sheet ${sheetName} is empty after raw reconstruction`, { sheetName });
                                sheetDiagnostics.push({ sheetName, reason: 'empty' });
                                continue;
                            }
                        } catch (e) {
                            this.parseLogger.error(`Failed to reconstruct rows for ${sheetName}`, { sheetName, message: e && e.message ? e.message : String(e), stack: e && e.stack ? e.stack : null });
                            sheetDiagnostics.push({ sheetName, reason: 'empty' });
                            continue;
                        }
                    }

                    if (typeof document !== 'undefined') {
                        const statusMsg = document.getElementById('pdf-parse-message');
                        const progressBar = document.getElementById('pdf-progress-bar');
                        if (statusMsg && progressBar) {
                            statusMsg.textContent = `Parsing Excel sheet ${sheetIndex + 1} of ${totalSheets}: ${sheetName}`;
                            progressBar.style.width = `${Math.round(((sheetIndex + 1) / totalSheets) * 100)}%`;
                        }
                    }

                    let headerIndex = -1;
                    const headerSearchLimit = Math.min(80, rows.length);
                    const nameKeywords = ['SCHOOL NAME','SCHOOL','SCH','INSTITUTION','INSTITUTIONS','NAME','INST'];
                    for (let r = 0; r < headerSearchLimit; r++) {
                        // build a small block of nearby rows to handle stacked/merged header layouts
                        const start = Math.max(0, r - 3);
                        const end = Math.min(rows.length - 1, r + 3);
                        let blockText = '';
                        for (let rr = start; rr <= end; rr++) {
                            blockText += ' ' + ((rows[rr] || []).map(cell => (cell || '').toString().trim().toUpperCase()).join(' '));
                        }
                        const rowText = blockText.trim();
                        if (rowText.includes('CODE') && nameKeywords.some(k => rowText.includes(k))) {
                            headerIndex = r;
                            break;
                        }
                    }
                    if (headerIndex < 0) {
                        this.parseLogger.warn(`No header row found in ${sheetName}; using fallback code detection`, { sheetName, rowCount: rows.length });
                        // fallback: try to locate data rows by finding a numeric school code cell (5-7 digits)
                        let foundDataRow = -1;
                        let foundCodeCol = -1;

                        // First pass: detect a column that contains many numeric-looking codes
                        const maxCols = Math.max(...rows.map(r => (r || []).length));
                        const colCounts = Array.from({ length: maxCols }, () => 0);
                        for (let r = 0; r < rows.length; r++) {
                            const rr = rows[r] || [];
                            for (let c = 0; c < rr.length; c++) {
                                const cell = (rr[c] || '').toString().trim();
                                if (!cell) continue;
                                // numeric-looking: pure digits or digits with .0
                                if (/^\d{3,7}$/.test(cell) || /^\d{3,7}\.0+$/.test(cell) || /\b\d{3,7}\b/.test(cell)) {
                                    colCounts[c]++;
                                }
                            }
                        }

                        // choose column with the most matches (require at least 3 matches, otherwise fall back)
                        let bestCol = -1; let bestColCount = 0;
                        for (let c = 0; c < colCounts.length; c++) {
                            if (colCounts[c] > bestColCount) { bestColCount = colCounts[c]; bestCol = c; }
                        }

                        if (bestColCount >= 3) {
                            // locate the first row that has a code in that column
                            for (let r = 0; r < rows.length; r++) {
                                const cell = (rows[r] || [])[bestCol];
                                if (!cell) continue;
                                const cellText = ('' + cell).trim();
                                if (/\d{3,7}/.test(cellText)) {
                                    foundDataRow = r;
                                    foundCodeCol = bestCol;
                                    break;
                                }
                            }
                        }

                        // If still not found, scan raw sheet cells (handles merged/offset cells)
                        if (foundDataRow < 0 && sheet && typeof XLSX !== 'undefined' && XLSX.utils && XLSX.utils.decode_cell) {
                            for (const addr in sheet) {
                                if (!Object.prototype.hasOwnProperty.call(sheet, addr)) continue;
                                if (addr[0] === '!') continue;
                                try {
                                    const cellObj = sheet[addr];
                                    const txt = (cellObj && (cellObj.w || cellObj.v) ? String(cellObj.w || cellObj.v).trim() : '');
                                    if (!txt) continue;
                                    const m = txt.match(/(\d{3,7})/);
                                    if (m) {
                                        const dec = XLSX.utils.decode_cell(addr);
                                        foundDataRow = dec.r;
                                        foundCodeCol = dec.c;
                                        break;
                                    }
                                } catch (e) {
                                    // ignore decode errors
                                }
                            }
                        }

                        if (foundDataRow < 0) {
                            this.parseLogger.warn(`No detectable code row found in ${sheetName}`, { sheetName, rowCount: rows.length });
                            sheetDiagnostics.push({ sheetName, reason: 'no-code-found' });
                            continue;
                        }

                        // mark sheet as parsed (we located data rows)
                        sheetsParsed++;

                        // Heuristic: find the best name column by sampling rows after foundDataRow
                        const sampleRowsToCheck = 12;
                        const colScores = {};
                        for (let c = Math.max(0, foundCodeCol - 4); c <= foundCodeCol + 8; c++) {
                            colScores[c] = 0;
                        }
                        for (let ri = foundDataRow; ri < Math.min(rows.length, foundDataRow + sampleRowsToCheck); ri++) {
                            const rowSample = rows[ri] || [];
                            for (const cStr of Object.keys(colScores)) {
                                const c = parseInt(cStr, 10);
                                const v = (rowSample[c] || '').toString().trim();
                                if (!v) continue;
                                // +1 score for presence, +2 if contains letters
                                if (/\D/.test(v)) colScores[c] += 2;
                                else colScores[c] += 1;
                            }
                        }
                        // pick highest scoring col that's not the code column
                        let foundNameCol = -1;
                        let bestScore = -1;
                        for (const [cStr, score] of Object.entries(colScores)) {
                            const c = parseInt(cStr, 10);
                            if (c === foundCodeCol) continue;
                            if (score > bestScore) { bestScore = score; foundNameCol = c; }
                        }
                        if (foundNameCol < 0) foundNameCol = foundCodeCol + 1;

                        for (let ri = foundDataRow; ri < rows.length; ri++) {
                            const row = rows[ri] || [];
                            const rawCode = row[foundCodeCol];
                            if (!rawCode) continue;
                            const m = ('' + rawCode).match(/(\d{3,7})/);
                            const code = m ? m[1] : ('' + rawCode).replace(/\.0+$/, '').trim();
                            if (!code) continue;
                            if (parsed.some(s => s.code === code)) continue;

                            const name = foundNameCol >= 0 ? (row[foundNameCol] || '').toString().trim() : '';
                            if (!name) continue;

                            parsed.push({
                                code,
                                name,
                                region: 'Unknown',
                                district: 'District Central',
                                location: '',
                                category: 'B',
                                status: 'Day/Boarding',
                                gender: 'Mixed',
                                type: this.inferSchoolTypeFromMetadata(name, code, '', '', '', ''),
                                progs: ['GEN. ARTS', 'GEN. SCI']
                            });
                        }

                        // done with this sheet fallback
                        continue;
                    }

                    const headerRow = rows[headerIndex].map(cell => (cell || '').toString().trim().toUpperCase());
                    const priorRow = headerIndex > 0 ? rows[headerIndex - 1].map(cell => (cell || '').toString().trim().toUpperCase()) : [];

                    // expand merged/header blocks so we search across nearby rows for labels
                    // expand merged/header blocks so we search across nearby rows for labels
                    const headerRows = expandMergedHeaders(sheet, rows, headerIndex);

                    const findColumn = labels => {
                        const upperLabels = labels.map(label => label.toUpperCase());
                        // search all expanded header rows first (covers merged/stacked headers)
                        for (let r = 0; r < headerRows.length; r++) {
                            const row = headerRows[r] || [];
                            for (let i = 0; i < row.length; i++) {
                                const value = (row[i] || '').toString().trim().toUpperCase();
                                if (!value) continue;
                                if (upperLabels.some(label => value === label || value.includes(label) || label.includes(value))) {
                                    return i;
                                }
                            }
                        }

                        // fallback to the single headerRow and the prior row
                        for (let i = 0; i < headerRow.length; i++) {
                            const value = headerRow[i];
                            if (value && upperLabels.some(label => value === label || value.includes(label))) {
                                return i;
                            }
                        }
                        for (let i = 0; i < priorRow.length; i++) {
                            const value = priorRow[i];
                            if (value && upperLabels.some(label => value === label || value.includes(label))) {
                                return i;
                            }
                        }
                        return -1;
                    };

                    const codeCol = findColumn(['CODE']);
                    const nameCol = findColumn(['SCHOOL NAME', 'SCHOOL']);
                    const locationCol = findColumn(['LOCATION', 'LOCALITY', 'TOWN', 'TOWN/CITY', 'HOME TOWN', 'PLACE', 'VILLAGE', 'ADDRESS']);
                    const regionCol = findColumn(['REGION', 'HOME / JHS REGION', 'HOME REGION', 'JHS REGION', 'JHS REGION (HOME)']);
                    const districtCol = findColumn(['DISTRICT', 'JHS DISTRICT', 'JHS DISTRICT (DAY CATCHMENT)', 'DISTRICT/TOWN', 'DISTRICT (DAY CATCHMENT)']);
                    const genderCol = findColumn(['GENDER']);
                    const statusCol = findColumn(['STATUS']);
                    const typeCol = findColumn(['TYPE']);

                    // we found a header row for this sheet - count it as parsed (we will still validate rows below)
                    sheetsParsed++;
                    this.parseLogger.step(`Header row found for ${sheetName}`, { headerIndex, codeCol, nameCol, regionCol, districtCol, genderCol, statusCol, typeCol });

                    // headerRows already defined above
                    const programCols = [];
                    const programHeaderByColumn = {};
                    const maxHeaderColumns = Math.max(...headerRows.map(row => row.length), headerRow.length);
                    for (let ci = Math.max(0, genderCol + 1); ci < maxHeaderColumns; ci++) {
                        const combined = headerRows.map(row => normalizeHeader(row[ci])).filter(Boolean).join(' ');
                        const headerText = extractHeaderLabel(combined);
                        const codeMatch = combined.match(/\b(101|201|301|401|402|501|502|503|504)\b/);
                        const numericCodeMatch = combined.match(/\b([6-9]\d{2})\b/);
                        const codeDefinition = codeMatch ? programmeByCode[codeMatch[1]] : null;
                        const labelDefinition = headerMatchesProgramme(combined);
                        const tradeLabel = (programmeDefinitions.tradeGroups || []).find(group => normalizeHeader(combined).includes(normalizeHeader(group)));
                        const definition = codeDefinition || labelDefinition;
                        const inferredCode = !definition && numericCodeMatch ? numericCodeMatch[1] : '';
                        const inferredCanonical = inferredCode ? (parseInt(inferredCode, 10) >= 900 ? 'BUS' : 'TECH') : '';
                        const inferredDisplay = !definition && headerText ? headerText : (!definition && inferredCode ? this.inferDetailedProgrammeGroup(inferredCode) : null);
                        if (definition || tradeLabel || inferredCode) {
                            programCols.push(ci);
                            programHeaderByColumn[ci] = {
                                canonical: definition ? definition.canonical : (tradeLabel === 'BUSINESS' ? 'BUS' : inferredCanonical || 'TECH'),
                                display: definition ? definition.display : (headerText || tradeLabel || inferredDisplay || inferredCode)
                            };
                        }
                    }

                    const sheetHeaderText = rows.slice(0, Math.min(8, rows.length))
                        .map(r => r.filter(c => c).join(' '))
                        .join(' ')
                        .toUpperCase();
                    let category = 'B';
                    if (sheetHeaderText.includes('CATEGORY A')) category = 'A';
                    else if (sheetHeaderText.includes('CATEGORY C')) category = 'C';

                    for (let ri = headerIndex + 1; ri < rows.length; ri++) {
                        const row = rows[ri];
                        if (!row || !row[codeCol]) continue;
                        const rawCode = row[codeCol];
                        const code = ('' + rawCode).replace(/\.0+$/, '').trim();
                        if (!code) continue;
                        if (parsed.some(s => s.code === code)) continue;

                        const name = (row[nameCol] || '').toString().trim();
                        if (!name) {
                            this.parseLogger.warn(`Skipping row with missing school name in ${sheetName}`, { sheetName, code, rowIndex: ri });
                        }
                        if (!name) continue;
                        const region = (regionCol >= 0 ? (row[regionCol] || '').toString().trim() : '').trim();
                        const district = (districtCol >= 0 ? (row[districtCol] || '').toString().trim() : '').trim();
                        let location = (locationCol >= 0 ? (row[locationCol] || '').toString().trim() : '').trim();
                        const gender = (genderCol >= 0 ? (row[genderCol] || '').toString().trim() : '').trim() || (/GIRLS/i.test(name) ? 'Girls' : /BOYS/i.test(name) ? 'Boys' : 'Mixed');
                        let status = (statusCol >= 0 ? (row[statusCol] || '').toString().trim() : '').trim();
                        const typeValue = typeCol >= 0 ? (row[typeCol] || '').toString().trim() : '';
                        const rowTypeValue = this.extractExplicitSchoolTypeFromExcelRow(row, typeCol);
                        const explicitTypeValue = typeValue || rowTypeValue;
                        const normalizedStatus = this.normalizeResidenceStatus(status);
                        const type = this.inferSchoolTypeFromMetadata(name, code, normalizedStatus || '', '', sheetHeaderText, explicitTypeValue);

                        status = normalizedStatus || 'Day/Boarding';
                        if (!location) {
                            location = this.buildLocationLabel(region, district);
                        }

                        const progs = [];
                        const programNames = [];
                        for (const ci of programCols) {
                            let cellVal = (row[ci] || '').toString().trim();
                            if (!cellVal) continue;
                            const headerDefinition = programHeaderByColumn[ci];

                            // If cell refers to appendix, attempt to extract detailed program names from the appendix sheet
                            let appendixMatch = (cellVal || '').toString().toUpperCase().match(/APPENDIX\s*(\d+)|REFER TO APPENDIX\s*(\d+)/);
                            let appendixPrograms = [];
                            if (appendixMatch) {
                                const num = appendixMatch[1] || appendixMatch[2];
                                appendixPrograms = findProgramsForCode(num, code) || [];
                            } else {
                                // if no explicit appendix reference, try to find programs by searching appendix candidates
                                appendixPrograms = findProgramsForCode(null, code) || [];
                            }

                            // Prefer a specific program inferred from the cell or appendix when a trade/group header exists.
                            let normalized = null;
                            let displayName = null;
                            const inferredFromCell = normalizeProgramLabel(cellVal);

                            if (appendixPrograms && appendixPrograms.length) {
                                // normalize appendix labels where possible and add all
                                for (const ap of appendixPrograms) {
                                    const norm = normalizeProgramLabel(ap) || ap;
                                    const disp = programmeDisplayName(ap) || ap;
                                    if (norm && !progs.includes(norm)) progs.push(norm);
                                    if (disp && !programNames.includes(disp)) {
                                        programNames.push(disp);
                                    }
                                    const expanded = this.resolveProgrammeEntry(ap);
                                    if (expanded && expanded.canonical && expanded.display && !programNames.includes(expanded.display)) {
                                        programNames.push(expanded.display);
                                    }
                                }
                                continue;
                            }

                            if (headerDefinition) {
                                if (inferredFromCell) {
                                    normalized = inferredFromCell;
                                    displayName = programmeDisplayName(cellVal) || headerDefinition.display || cellVal;
                                } else {
                                    normalized = headerDefinition.canonical;
                                    displayName = headerDefinition.display || cellVal;
                                }
                            } else {
                                normalized = inferredFromCell || normalizeProgramLabel(cellVal);
                                displayName = programmeDisplayName(cellVal) || (headerDefinition ? headerDefinition.display : cellVal);
                            }

                            if (normalized && !progs.includes(normalized)) {
                                progs.push(normalized);
                            }
                            if (displayName && !programNames.includes(displayName)) {
                                programNames.push(displayName);
                            }
                        }

                        if (progs.length === 0) {
                            if (type === 'TVET') {
                                progs.push('TECH');
                            } else if (type === 'STEM') {
                                progs.push('STEM');
                                progs.push('GEN. SCI');
                            } else {
                                progs.push('GEN. ARTS');
                                progs.push('GEN. SCI');
                            }
                        }

                        if (!programNames.length) {
                            programNames.push(...progs.map(program => {
                                const definition = (programmeDefinitions.programmes || []).find(item => item.canonical === program);
                                return definition ? definition.display : program;
                            }));
                        }

                        parsed.push({
                            code,
                            name,
                            region: region || 'Unknown',
                            district: district || 'District Central',
                            location,
                            category,
                            status: status || 'Day/Boarding',
                            gender,
                            type,
                            progs,
                            programNames
                        });
                    }
                }
                // record parsed sheet counts and diagnostics for external UI reads
                try {
                    this._excelSheetsParsed = sheetsParsed;
                    this._excelTotalSheets = totalSheets;
                    this._excelSheetDiagnostics = sheetDiagnostics;
                } catch (e) {
                    // ignore in non-class contexts
                }

                if (typeof document !== 'undefined') {
                    const statusMsg = document.getElementById('pdf-parse-message');
                    const progressBar = document.getElementById('pdf-progress-bar');
                    if (statusMsg && progressBar) {
                        statusMsg.textContent = `Completed parsing ${parsed.length} schools from ${sheetsParsed} of ${totalSheets} Excel sheets.`;
                        progressBar.style.width = `100%`;
                    }
                }
                this.parseLogger.step('Excel workbook parse completed', { parsedCount: parsed.length, sheetsParsed, totalSheets, diagnostics: sheetDiagnostics.slice(0, 20) });
                return parsed;
            }

            extractExplicitSchoolTypeFromExcelRow(row, typeCol = -1) {
                const typeCandidate = typeCol >= 0 ? (row[typeCol] || '').toString().trim() : '';
                if (typeCandidate) return typeCandidate;

                for (const cell of row) {
                    const text = (cell || '').toString().trim();
                    if (!text) continue;
                    const normalized = text.toUpperCase();
                    if (/\bTVET\b/.test(normalized)) return 'TVET';
                    if (/\bSHTS\b/.test(normalized)) return 'SHTS';
                    if (/\bSHS\s*\/\s*TECH\b/.test(normalized) || /\bSHS\s+TECH\b/.test(normalized) || /\bSENIOR\s+HIGH\s+TECH\b/.test(normalized) || /\bTECHNICAL\s+SENIOR\s+HIGH\b/.test(normalized)) return 'SHTS';
                    if (/\bSTEM\b/.test(normalized)) return 'STEM';
                    if (/\bSHS\b/.test(normalized)) return 'SHS';
                }

                return '';
            }

            inferSchoolTypeFromMetadata(name, code, status, contextSnippet, sheetHeaderText, explicitTypeValue = '') {
                const normalizedName = (name || '').toLowerCase();
                const normalizedStatus = (status || '').toLowerCase();
                const normalizedContext = (contextSnippet || '').toLowerCase();
                const normalizedSheet = (sheetHeaderText || '').toLowerCase();
                const explicitType = (explicitTypeValue || '').toUpperCase();

                if (explicitType) {
                    if (/TVET|PUBLIC\s*TVET|VOCATIONAL/.test(explicitType)) return 'TVET';
                    if (/STEM|SCIENCE\s*TECH|BIO(?:-?MEDICAL)?|ENGINEERING|AEROSPACE|ROBOTICS/.test(explicitType)) return 'STEM';
                    if (/SHTS/.test(explicitType)) return 'SHTS';
                    if (/SHS/.test(explicitType)) return 'SHS';
                }

                const isExplicitShts = /\b(?:shts|shs\/?tech|shs\s+tech|senior\s+high(?:\/tech|\s+tech)|technical\s+senior\s+high|senior\s+high\s+technical)\b/.test(normalizedName)
                    || /\b(?:shts|shs\/?tech|shs\s+tech|senior\s+high(?:\/tech|\s+tech)|technical\s+senior\s+high|senior\s+high\s+technical)\b/.test(normalizedContext);
                const isStem = /\bstem\b/.test(normalizedName)
                    || /\bstem\b/.test(normalizedContext)
                    || /\b(?:bio(?:-?medical)?\s*science|medical\s*science|health\s*science|computer\s*science|agricultural\s*science|science\s*[-/ ]?\s*tech|stem\s*[-/ ]?\s*tech|engineering|aerospace|robotics)\b/.test(normalizedName)
                    || /\b(?:bio(?:-?medical)?\s*science|medical\s*science|health\s*science|computer\s*science|agricultural\s*science|science\s*[-/ ]?\s*tech|stem\s*[-/ ]?\s*tech|engineering|aerospace|robotics)\b/.test(normalizedContext)
                    || /\b(?:bio(?:-?medical)?\s*science|medical\s*science|health\s*science|computer\s*science|agricultural\s*science|science\s*[-/ ]?\s*tech|stem\s*[-/ ]?\s*tech|engineering|aerospace|robotics)\b/.test(normalizedSheet);
                const isExplicitTvet = /\b(?:public\s+tvet|tvets?|tvet)\b/.test(normalizedName)
                    || /\b(?:public\s+tvet|tvets?|tvet)\b/.test(normalizedContext)
                    || /\b(?:public\s+tvet|tvets?|tvet)\b/.test(normalizedSheet)
                    || /\b(?:public\s+tvet|tvets?|tvet)\b/.test(normalizedStatus);
                const isTechnicalInstitute = /\b(?:technical|vocational)\s+(?:institute|training|centre|center|college|school)\b/.test(normalizedName)
                    || /\b(?:technical|vocational)\s+(?:institute|training|centre|center|college|school)\b/.test(normalizedContext)
                    || /\b(?:technical|vocational)\s+(?:institute|training|centre|center|college|school)\b/.test(normalizedSheet);

                if (isStem) return 'STEM';
                if (isExplicitShts) return 'SHTS';
                if (isExplicitTvet || isTechnicalInstitute) return 'TVET';
                if (/^9/.test(code) && !isExplicitShts) return 'TVET';

                return 'SHS';
            }

            async loadDefaultRegisterFromPdf() {
                const statusBox = document.getElementById('pdf-parse-status');
                const statusMsg = document.getElementById('pdf-parse-message');
                const progressBar = document.getElementById('pdf-progress-bar');
                const spinner = document.getElementById('pdf-spinner');

                statusBox.classList.remove('hidden');
                spinner.className = "fa-solid fa-circle-notch fa-spin text-amber-400";
                statusMsg.textContent = "Loading default 2026 school register...";
                progressBar.style.width = `10%`;

                const response = await fetch(this.defaultRegisterUrlPdf);
                if (!response.ok) throw new Error(`Unable to load default register (${response.status})`);

                const arrayBuffer = await response.arrayBuffer();
                await this.parsePdfArrayBuffer(arrayBuffer, 'default 2026 register');
            }

            async parsePdfArrayBuffer(arrayBuffer, sourceLabel = 'uploaded PDF') {
                const statusBox = document.getElementById('pdf-parse-status');
                const statusMsg = document.getElementById('pdf-parse-message');
                const progressBar = document.getElementById('pdf-progress-bar');
                const spinner = document.getElementById('pdf-spinner');
                this.parseLogger.clear();
                this.parseLog = [];
                this.parseErrors = [];
                this.parseLogger.step('Starting PDF parse', { sourceLabel, bytes: arrayBuffer.byteLength });

                statusBox.classList.remove('hidden');
                spinner.className = "fa-solid fa-circle-notch fa-spin text-amber-400";
                statusMsg.textContent = `Loading ${sourceLabel}...`;
                progressBar.style.width = `2%`;

                try {
                    this.parseLogger.step('Opening PDF document', { sourceLabel });
                    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
                    const totalPages = pdf.numPages;
                    this.parseLogger.step('PDF loaded', { totalPages, sourceLabel });

                    let newSchoolsMap = new Map();
                    let currentCategory = 'B';
                    let currentRegion = 'Ashanti';

                    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
                        await new Promise(resolve => setTimeout(resolve, 0));

                        const pct = Math.round((pageNum / totalPages) * 100);
                        progressBar.style.width = `${pct}%`;
                        statusMsg.textContent = `Extracting Page ${pageNum} of ${totalPages}... (${newSchoolsMap.size} schools collected)`;

                        const page = await pdf.getPage(pageNum);
                        const textContent = await page.getTextContent();
                        const pageItems = (textContent.items || []).map(item => ({
                            str: item.str || '',
                            x: item.transform ? item.transform[4] : 0,
                            y: item.transform ? item.transform[5] : 0,
                            width: item.width || 0
                        }));
                        const pageText = pageItems.map(item => item.str || '').join(' ');

                        if (/LIST\s+OF\s+CATEGORY\s+A/i.test(pageText)) currentCategory = 'A';
                        else if (/LIST\s+OF\s+CATEGORY\s+B/i.test(pageText)) currentCategory = 'B';
                        else if (/LIST\s+OF\s+CATEGORY\s+C/i.test(pageText)) currentCategory = 'C';
                        else if (/STEM\s+SCHOOLS/i.test(pageText)) currentCategory = 'A';

                        for (let reg of REGION_LIST) {
                            if (new RegExp(`\\b${reg}\\b`, 'i').test(pageText)) {
                                currentRegion = reg;
                                break;
                            }
                        }

                        const rowGroups = this.groupPageItemsByRow(pageItems, 8);
                        const codeEntries = [];

                        for (const rowItems of rowGroups) {
                            for (const item of rowItems) {
                                const text = (item.str || '').trim();
                                if (/^\d{7}$/.test(text)) {
                                    codeEntries.push({ code: text, item, rowItems });
                                }
                            }
                        }

                        for (const entry of codeEntries) {
                            const code = entry.code;
                            if (newSchoolsMap.has(code)) continue;

                            const codeItem = entry.item;
                            const rowItems = entry.rowItems;
                            const fullSnippet = (rowItems || []).map(item => (item.str || '').trim()).filter(Boolean).join(' ');
                            const rightContext = this.extractRightContext(rowItems, codeItem);
                            const contextSnippet = `${fullSnippet} ${rightContext}`.trim();

                            if (KNOWN_CODE_DETAILS[code]) {
                                const info = KNOWN_CODE_DETAILS[code];
                                const statusFromSource = this.normalizeResidenceStatus(`${info.status || ''} ${contextSnippet}`);
                                newSchoolsMap.set(code, {
                                    code: code,
                                    name: info.name,
                                    region: info.region,
                                    district: info.district,
                                    location: this.buildLocationLabel(info.region, info.district),
                                    category: info.category || currentCategory,
                                    status: statusFromSource || this.normalizeResidenceStatus(info.status) || 'Day/Boarding',
                                    gender: info.gender || "Mixed",
                                    type: info.type || "SHS",
                                    progs: [...info.progs]
                                });
                                continue;
                            }

                            let nameMatch = rightContext.match(/^[\s\:\.\-]*([A-Za-z0-9\s.,'()\/-]{3,55}?)(?=\s+(?:Ahafo|Ashanti|Bono|Central|Eastern|Gt\.|Volta|Western|Northern|Upper|Mixed|Girls|Boys|Day|Boarding|SHS|SHTS|TVET|STEM|\d{7}|$))/i);
                            let schName = nameMatch ? nameMatch[1].trim() : rightContext || "Second Cycle School (" + code + ")";

                            schName = schName.replace(/^[0-9\s\.\,\-]+/, '').trim();
                            if (schName.length < 3) schName = "School " + code;

                            if (this.isPdfSchoolNameJunk(schName, contextSnippet)) {
                                continue;
                            }

                            let gender = "Mixed";
                            if (/\bGirls\b/i.test(contextSnippet) || /Girls'/i.test(schName)) gender = "Girls";
                            else if (/\bBoys\b/i.test(contextSnippet) || /Boys'/i.test(schName)) gender = "Boys";

                            const statusFromSource = this.normalizeResidenceStatus(contextSnippet) || 'Day/Boarding';
                            const type = this.inferSchoolTypeFromMetadata(schName, code, statusFromSource, contextSnippet, '', '');

                            const regionDistricts = (this.regionData && this.regionData[currentRegion]) || (FALLBACK_REGION_DATA[currentRegion] || []);
                            const inferred = this.inferDistrict(contextSnippet, currentRegion, regionDistricts);
                            const district = inferred.district;
                            const location = inferred.location;

                            let progs = this.inferProgramsFromSubjectMarks(pageItems, codeItem, contextSnippet, type, rowItems);

                            newSchoolsMap.set(code, {
                                code: code,
                                name: schName,
                                region: currentRegion,
                                district: district,
                                location: location,
                                category: currentCategory,
                                status: statusFromSource,
                                gender: gender,
                                type: type,
                                progs: [...new Set(progs)]
                            });
                        }
                    }

                    const parsedArray = Array.from(newSchoolsMap.values());

                    if (parsedArray.length > 0) {
                        // store PDF-parsed dataset separately and exclude any invalid entries without school codes
                        const validParsedSchools = parsedArray.filter(s => s && s.code && String(s.code).trim());
                        const mergedSchools = this.mergeUploadWithCanonicalRegistry(validParsedSchools, this._excelParsedSchools || this._pdfParsedSchools);
                        this._pdfParsedSchools = mergedSchools.map(s => ({
                            ...s,
                            location: s.location || this.buildLocationLabel(s.region, s.district)
                        }));
                        this.datasetSchoolCount = this._pdfParsedSchools.length;
                        this.selectedChoices = [];
                        this.updateCountDisplay();

                        spinner.className = "fa-solid fa-check text-emerald-400";
                        this._pdfPagesParsed = totalPages;
                        statusMsg.textContent = `Loaded ${this._pdfParsedSchools.length} schools from ${sourceLabel} (parsed ${totalPages} pages).`;
                        const activePdfCount = this.filterValidSchoolEntries(this._pdfParsedSchools.map(s => ({ ...s }))).length;
                        document.getElementById('dataset-status-badge').innerHTML = `<i class="fa-solid fa-circle-check text-amber-300"></i> ${this._pdfParsedSchools.length} Loaded / ${activePdfCount} Active (PDF)`;

                        // Respect user's dataset preference when choosing the active dataset
                        this.applyDatasetPreference();
                    } else {
                        spinner.className = "fa-solid fa-triangle-exclamation text-amber-400";
                        statusMsg.textContent = "Could not parse code tables. Retaining current dataset.";
                    }
                } catch (err) {
                    const message = err && err.message ? err.message : String(err);
                    this.parseLogger.error('PDF parse failed', { sourceLabel, message, stack: err && err.stack ? err.stack : null });
                    this.parseErrors.push({ ts: new Date().toISOString(), source: 'pdf', message, stack: err && err.stack ? err.stack : null });
                    console.error("PDF Parsing Error:", err);
                    spinner.className = "fa-solid fa-circle-xmark text-rose-400";
                    statusMsg.textContent = "PDF Parsing failed. Default 2026 database active.";
                }
            }

            async handlePdfUpload(event) {
                const file = event.target.files[0];
                if (!file) return;

                this.parseLogger.clear();
                this.parseLog = [];
                this.parseErrors = [];
                this.parseLogger.step('PDF upload selected', { fileName: file.name, size: file.size });
                const arrayBuffer = await file.arrayBuffer();
                await this.parsePdfArrayBuffer(arrayBuffer, 'uploaded PDF');

                const parsedCount = this._pdfParsedSchools ? this._pdfParsedSchools.length : 0;
                if (parsedCount < 1000) {
                    await this.useBundledRegistryFallback('Uploaded PDF parser only recovered a partial register.');
                    return;
                }

                if (this._pdfParsedSchools && document.getElementById('dataset-select')) {
                    document.getElementById('dataset-select').value = 'PDF';
                    this.datasetPreference = 'PDF';
                    this.saveStateToStorage();
                }
            }

            async handleExcelUpload(event) {
                const file = event.target.files && event.target.files[0];
                if (!file) return;

                await this.loadProgrammeDefinitions();

                this.parseLogger.clear();
                this.parseLog = [];
                this.parseErrors = [];
                this.parseLogger.step('Excel upload selected', { fileName: file.name, size: file.size });

                try {
                    const arrayBuffer = await file.arrayBuffer();
                    const workbook = XLSX.read(arrayBuffer, { type: 'array', raw: false, cellDates: true });
                    this.parseLogger.step('Uploaded Excel workbook opened', { sheetCount: workbook.SheetNames.length, sheets: workbook.SheetNames });
                    const parsedArray = this.parseExcelWorkbook(workbook);
                    const validParsedSchools = parsedArray.filter(s => s && s.code && String(s.code).trim());
                    const mergedSchools = this.mergeUploadWithCanonicalRegistry(validParsedSchools, this._excelParsedSchools || this._pdfParsedSchools);
                    this._excelParsedSchools = mergedSchools.map(s => ({
                        ...s,
                        location: s.location || this.buildLocationLabel(s.region, s.district)
                    }));
                    this.datasetSchoolCount = this._excelParsedSchools.length;

                    const parsedCount = this._excelParsedSchools.length;
                    if (parsedCount < 1000) {
                        await this.useBundledRegistryFallback('Uploaded Excel parser only recovered a partial register.');
                        return;
                    }

                    this.datasetPreference = 'EXCEL';
                    if (document.getElementById('dataset-select')) {
                        document.getElementById('dataset-select').value = 'EXCEL';
                    }
                    this.applyDatasetPreference();
                    this.saveStateToStorage();
                    const statusMsg = document.getElementById('pdf-parse-message');
                    if (statusMsg) {
                        statusMsg.textContent = `Uploaded Excel file parsed: ${this._excelParsedSchools.length} schools loaded.`;
                    }
                } catch (err) {
                    this.parseLogger.error('Uploaded Excel parsing failed', { message: err && err.message ? err.message : String(err), stack: err && err.stack ? err.stack : null });
                    console.error('[Excel upload] Failed', err);
                    if (document.getElementById('pdf-parse-message')) {
                        document.getElementById('pdf-parse-message').textContent = 'Excel upload failed. Check console log for details.';
                    }
                }
            }

            async setDatasetPreference(pref) {
                this.datasetPreference = (pref || 'EXCEL').toUpperCase();
                const trimmedPref = this.datasetPreference;
                const statusMsg = document.getElementById('pdf-parse-message');
                const progressBar = document.getElementById('pdf-progress-bar');
                if (trimmedPref === 'EXCEL') {
                    if (statusMsg) statusMsg.textContent = 'Reparsing using Excel dataset...';
                    if (progressBar) progressBar.style.width = '5%';
                    try {
                        await this.loadDefaultRegisterFromExcel();
                    } catch (err) {
                        console.warn('Failed to load Excel dataset on selection:', err);
                        if (statusMsg) statusMsg.textContent = 'Excel dataset load failed. Retaining current dataset.';
                    }
                } else if (trimmedPref === 'PDF') {
                    if (statusMsg) statusMsg.textContent = 'Reparsing using PDF dataset...';
                    if (progressBar) progressBar.style.width = '5%';
                    try {
                        await this.loadDefaultRegisterFromPdf();
                    } catch (err) {
                        console.warn('Failed to load PDF dataset on selection:', err);
                        if (statusMsg) statusMsg.textContent = 'PDF dataset load failed. Retaining current dataset.';
                    }
                }
                this.applyDatasetPreference();
                try { this.saveStateToStorage(); } catch (e) { /* ignore */ }
            }

            applyDatasetPreference() {
                const pref = (this.datasetPreference || 'EXCEL').toUpperCase();
                let sourceCount = 0;
                if (pref === 'PDF') {
                    if (this._pdfParsedSchools && this._pdfParsedSchools.length) {
                        this.schools = this.filterValidSchoolEntries(this._pdfParsedSchools.map(s => ({ ...s })));
                        sourceCount = this.schools.length;
                        this.datasetSchoolCount = this._pdfParsedSchools.length;
                        document.getElementById('dataset-status-badge').innerHTML = `<i class="fa-solid fa-circle-check text-amber-300"></i> ${this._pdfParsedSchools.length} Loaded / ${sourceCount} Active (PDF)`;
                    } else {
                        this.applyDatasetPreferenceFallback();
                    }
                } else {
                    if (this._excelParsedSchools && this._excelParsedSchools.length) {
                        this.schools = this.filterValidSchoolEntries(this._excelParsedSchools.map(s => ({ ...s })));
                        sourceCount = this.schools.length;
                        this.datasetSchoolCount = this._excelParsedSchools.length;
                        document.getElementById('dataset-status-badge').innerHTML = `<i class="fa-solid fa-circle-check text-amber-300"></i> ${this._excelParsedSchools.length} Loaded / ${sourceCount} Active (Excel)`;
                    } else {
                        this.applyDatasetPreferenceFallback();
                    }
                }

                // update UI; if initialization is still in progress, delay package regeneration until init completes
                this.updateDesiredProgramOptions();
                this.updateCountDisplay();
                if (!this._isInitializing) {
                    this.clearAndResetPairings();
                }
            }

            applyDatasetPreferenceFallback() {
                // Try the other parsed source or bundled fallback
                if (this._excelParsedSchools && this._excelParsedSchools.length) {
                    this.schools = this.filterValidSchoolEntries(this._excelParsedSchools.map(s => ({ ...s })));
                    this.datasetPreference = 'EXCEL';
                    this.datasetSchoolCount = this._excelParsedSchools.length;
                    if (document.getElementById('dataset-select')) document.getElementById('dataset-select').value = 'EXCEL';
                    document.getElementById('dataset-status-badge').innerHTML = `<i class="fa-solid fa-circle-check text-amber-300"></i> ${this.datasetSchoolCount} Loaded / ${this.schools.length} Active (Excel)`;
                } else if (this._pdfParsedSchools && this._pdfParsedSchools.length) {
                    this.schools = this.filterValidSchoolEntries(this._pdfParsedSchools.map(s => ({ ...s })));
                    this.datasetPreference = 'PDF';
                    this.datasetSchoolCount = this._pdfParsedSchools.length;
                    if (document.getElementById('dataset-select')) document.getElementById('dataset-select').value = 'PDF';
                    document.getElementById('dataset-status-badge').innerHTML = `<i class="fa-solid fa-circle-check text-amber-300"></i> ${this.datasetSchoolCount} Loaded / ${this.schools.length} Active (PDF)`;
                } else {
                    this.schools = this.filterValidSchoolEntries([...PRELOADED_SCHOOLS].map(s => ({ ...s, location: s.location || this.buildLocationLabel(s.region, s.district) })));
                    this.datasetPreference = 'EXCEL';
                    this.datasetSchoolCount = this.schools.length;
                    if (document.getElementById('dataset-select')) document.getElementById('dataset-select').value = 'EXCEL';
                    document.getElementById('dataset-status-badge').innerHTML = `<i class="fa-solid fa-circle-check text-amber-300"></i> ${this.datasetSchoolCount} Loaded / ${this.schools.length} Active (Bundled)`;
                }
            }

            filterValidSchoolEntries(schools = []) {
                return (schools || []).filter(s => {
                    if (!s || !s.code || !String(s.code).trim()) return false;
                    if (!s.region || !String(s.region).trim()) return false;
                    const codeText = String(s.code).trim().toLowerCase();
                    const regionText = String(s.region).trim().toLowerCase();
                    if (codeText === 'unknown' || regionText === 'unknown') return false;
                    return true;
                }).map(s => ({ ...s }));
            }

            isPdfSchoolNameJunk(schName, contextSnippet = '') {
                const normalizedName = ('' + schName).trim().toLowerCase();
                const normalizedContext = ('' + contextSnippet).trim().toLowerCase();
                const junkPatterns = [
                    /appendix\s*\d+/, /contains\s+detailed/, /candidates?/, /school\s*\(\d+\)/,
                    /unknown/, /cat\s*[abc]/, /day\/boarding/, /technical\s+institutions?/, /programme?s?\b/,
                    /c\)$/, /d\)$/, /ii\./i, /page\s+\d+/, /school\s+list/i
                ];
                if (junkPatterns.some(pattern => pattern.test(normalizedName))) return true;
                if (junkPatterns.some(pattern => pattern.test(normalizedContext))) return true;
                if (/^school\s*\d+$/i.test(normalizedName)) return true;
                if (/^second\s+cycle\s+school/i.test(normalizedName)) return true;
                return false;
            }

            validateAndPrint() {
                this.openStudentPrintModal();
            }

            openStudentPrintModal() {
                const modal = document.getElementById('student-print-modal');
                if (!modal) {
                    this.executePrintFlow();
                    return;
                }
                const nameInput = document.getElementById('modal-student-name');
                const indexInput = document.getElementById('modal-student-index');

                const candNameElem = document.getElementById('cand-student-name');
                const candIndexElem = document.getElementById('cand-student-index');

                if (nameInput) {
                    nameInput.value = (candNameElem && candNameElem.value) ? candNameElem.value : (this.studentName || '');
                }
                if (indexInput) {
                    indexInput.value = (candIndexElem && candIndexElem.value) ? candIndexElem.value : (this.studentIndex || '');
                }

                modal.classList.remove('hidden');
                modal.classList.add('flex');
                if (nameInput) {
                    setTimeout(() => nameInput.focus(), 50);
                }
            }

            closeStudentPrintModal() {
                const modal = document.getElementById('student-print-modal');
                if (!modal) return;
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }

            confirmAndPrint(event) {
                if (event) event.preventDefault();
                const nameInput = document.getElementById('modal-student-name');
                const indexInput = document.getElementById('modal-student-index');

                const nameVal = nameInput ? nameInput.value.trim() : '';
                const indexVal = indexInput ? indexInput.value.trim() : '';

                this.studentName = nameVal;
                this.studentIndex = indexVal;

                const candNameElem = document.getElementById('cand-student-name');
                const candIndexElem = document.getElementById('cand-student-index');
                if (candNameElem) candNameElem.value = nameVal;
                if (candIndexElem) candIndexElem.value = indexVal;

                this.saveStateToStorage();
                this.closeStudentPrintModal();
                this.executePrintFlow();
            }

            executePrintFlow() {
                const printStudentName = document.getElementById('print-student-name');
                const printStudentIndex = document.getElementById('print-student-index');
                const printRegion = document.getElementById('print-region');
                const printDistrict = document.getElementById('print-district');
                const printGender = document.getElementById('print-gender');
                const printProgram = document.getElementById('print-program');
                const printAggregate = document.getElementById('print-aggregate');
                const printDateElem = document.getElementById('print-date');
                const regionElem = document.getElementById('cand-region');
                const districtElem = document.getElementById('cand-district');
                const programElem = document.getElementById('cand-program');

                // Ensure the printable table is up to date with the current selection
                this.renderSelectedTable();

                if (printStudentName) printStudentName.textContent = this.studentName || 'Not Provided';
                if (printStudentIndex) printStudentIndex.textContent = this.studentIndex || 'Not Provided';
                if (printRegion && regionElem) printRegion.textContent = regionElem.value || '--';
                if (printDistrict && districtElem) printDistrict.textContent = districtElem.value || '--';
                if (printGender) printGender.textContent = this.getSelectedGenderLabel();
                if (printProgram && programElem) {
                    const selectedPrograms = Array.from(programElem.querySelectorAll('input[type="checkbox"][data-filter-item]')).filter(input => input.checked).map(input => input.value);
                    printProgram.textContent = selectedPrograms.length ? selectedPrograms.join(', ') : '--';
                }
                if (printAggregate) printAggregate.textContent = this.computedAggregate.toString().padStart(2, '0');
                if (printDateElem) printDateElem.textContent = new Date().toLocaleDateString();

                window.print();
            }

            updatePairingsButtonState() {
                const btnTextElem = document.getElementById('calc-pairings-btn-text');
                const btnIconElem = document.getElementById('calc-pairings-btn-icon');
                const btnElem = document.getElementById('calc-pairings-btn') || document.querySelector('button[onclick*="generatePackages"]');
                if (!btnElem) return;

                const pkgContainer = document.getElementById('package-cards-container');
                const selectedCard = document.getElementById('selected-schools-card');

                const packagesVisible = Boolean(
                    pkgContainer &&
                    !pkgContainer.classList.contains('hidden') &&
                    pkgContainer.children.length > 0
                );

                const schoolListVisible = Boolean(
                    selectedCard &&
                    !selectedCard.classList.contains('hidden') &&
                    this.selectedChoices &&
                    this.selectedChoices.length > 0
                );

                // If the school-list AND/OR the packages are NOT visible, the button should be Calculate pairings. Otherwise, it should be Re-calculate pairings.
                const bothVisible = packagesVisible && schoolListVisible;

                if (btnTextElem) {
                    btnTextElem.textContent = bothVisible ? 'Re-calculate Pairings' : 'Calculate Pairings';
                }
                if (btnIconElem) {
                    btnIconElem.className = bothVisible ? 'fa-solid fa-rotate' : 'fa-solid fa-calculator';
                }
                if (!btnTextElem && !btnIconElem) {
                    btnElem.innerHTML = `<i class="fa-solid ${bothVisible ? 'fa-rotate' : 'fa-calculator'}"></i> ${bothVisible ? 'Re-calculate Pairings' : 'Calculate Pairings'}`;
                }
            }

            onShowPage(pageKey) {
                if (pageKey === 'results') {
                    this.updatePairingsButtonState();
                } else if (pageKey === 'profile') {
                    const candNameElem = document.getElementById('cand-student-name');
                    const candIndexElem = document.getElementById('cand-student-index');
                    if (candNameElem && this.studentName) candNameElem.value = this.studentName;
                    if (candIndexElem && this.studentIndex) candIndexElem.value = this.studentIndex;
                }
            }

            openDatabaseViewerModal() {
                const modal = document.getElementById('db-viewer-modal');
                if (!modal) return;
                this.collapseDbViewerFilterSection();

                // Populate Region dropdown if empty
                const regionSelect = document.getElementById('db-viewer-region');
                if (regionSelect && regionSelect.options.length <= 1) {
                    const regions = Object.keys(this.regionData || FALLBACK_REGION_DATA || {}).sort();
                    regions.forEach(r => {
                        const opt = document.createElement('option');
                        opt.value = r;
                        opt.textContent = r;
                        regionSelect.appendChild(opt);
                    });
                }

                // Populate Programme dropdown if empty
                const progSelect = document.getElementById('db-viewer-prog');
                if (progSelect && progSelect.options.length <= 1) {
                    const progList = (typeof ALL_GES_PROGRAMMES !== 'undefined') ? ALL_GES_PROGRAMMES : [
                        "AGRICULTURE", "BUSINESS", "CATERING", "FASHION", "GENERAL ARTS",
                        "GENERAL SCIENCE", "HOME ECONOMICS", "TECHNICAL", "VISUAL ARTS", "STEM"
                    ];
                    progList.forEach(p => {
                        const opt = document.createElement('option');
                        opt.value = p;
                        opt.textContent = p;
                        progSelect.appendChild(opt);
                    });
                }

                this.dbViewerPage = 1;
                this.dbViewerSortKey = 'name';
                this.dbViewerSortDir = 'asc';

                modal.classList.remove('hidden');
                modal.classList.add('flex');
                this.filterDatabaseViewer();
            }

            closeDatabaseViewerModal() {
                const modal = document.getElementById('db-viewer-modal');
                if (!modal) return;
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }

            resetDatabaseViewerFilters() {
                const searchInput = document.getElementById('db-viewer-search');
                const regionSelect = document.getElementById('db-viewer-region');
                const catSelect = document.getElementById('db-viewer-category');
                const typeSelect = document.getElementById('db-viewer-type');
                const resSelect = document.getElementById('db-viewer-residence');
                const genderSelect = document.getElementById('db-viewer-gender');
                const progSelect = document.getElementById('db-viewer-prog');

                if (searchInput) searchInput.value = '';
                if (regionSelect) regionSelect.value = '';
                if (catSelect) catSelect.value = '';
                if (typeSelect) typeSelect.value = '';
                if (resSelect) resSelect.value = '';
                if (genderSelect) genderSelect.value = '';
                if (progSelect) progSelect.value = '';

                this.dbViewerPage = 1;
                this.filterDatabaseViewer();
            }

            sortDatabaseViewer(key) {
                if (this.dbViewerSortKey === key) {
                    this.dbViewerSortDir = this.dbViewerSortDir === 'asc' ? 'desc' : 'asc';
                } else {
                    this.dbViewerSortKey = key;
                    this.dbViewerSortDir = 'asc';
                }
                this.filterDatabaseViewer();
            }

            goToSchoolPairingsPage() {
                if (typeof window.setPage === 'function') {
                    window.setPage('results');
                }
            }

            showDatabaseViewerToast(message) {
                let toast = document.getElementById('db-viewer-toast');
                if (!toast) {
                    toast = document.createElement('div');
                    toast.id = 'db-viewer-toast';
                    toast.className = 'fixed bottom-6 right-6 z-50 bg-emerald-800 text-white font-bold text-xs px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 border border-emerald-500 transition-all duration-300 transform translate-y-0 opacity-100';
                    document.body.appendChild(toast);
                }
                toast.innerHTML = `<i class="fa-solid fa-circle-check text-amber-300 text-sm"></i> <span>${message}</span>`;
                toast.style.display = 'flex';
                toast.style.opacity = '1';
                toast.style.transform = 'translateY(0)';

                clearTimeout(this._dbViewerToastTimeout);
                this._dbViewerToastTimeout = setTimeout(() => {
                    if (toast) {
                        toast.style.opacity = '0';
                        toast.style.transform = 'translateY(10px)';
                        setTimeout(() => { toast.style.display = 'none'; }, 300);
                    }
                }, 3500);
            }

            assignSchoolToChoice(schoolCode, choiceIndex) {
                if (isNaN(choiceIndex) || choiceIndex < 0 || choiceIndex > 7) return;

                if (!this.selectedChoices) {
                    this.selectedChoices = [];
                }

                const sch = (this.schools || []).find(s => String(s.code) === String(schoolCode)) || (this.schools || []).find(s => s.name === schoolCode);
                if (!sch) return;

                const allowedRes = this.getAllowedResidenceOptions(sch);
                const defaultRes = allowedRes.length > 0 ? allowedRes[0].value : (sch.status || sch.res || 'Boarding');

                const programElem = document.getElementById('cand-program');
                const desiredPrograms = programElem ? Array.from(programElem.querySelectorAll('input[type="checkbox"][data-filter-item]')).filter(input => input.checked).map(input => input.value) : [];
                const options = this.getProgrammeOptions(sch);
                const defaultProg = this.getSelectedProgrammeValue(sch, options, desiredPrograms) || (options[0] ? options[0].value : '');

                this.selectedChoices[choiceIndex] = {
                    ...sch,
                    prog: defaultProg,
                    res: defaultRes
                };

                const selectedSchoolsCard = document.getElementById('selected-schools-card');
                if (selectedSchoolsCard) {
                    selectedSchoolsCard.classList.remove('hidden');
                }

                this.renderSelectedTable();
                this.updatePairingsButtonState();
                this.saveStateToStorage();

                this.showDatabaseViewerToast(`Assigned "${sch.name}" as Choice #${choiceIndex + 1}`);
                this.filterDatabaseViewer();
            }

            filterDatabaseViewer() {
                const search = (document.getElementById('db-viewer-search')?.value || '').toLowerCase().trim();
                const region = document.getElementById('db-viewer-region')?.value || '';
                const category = document.getElementById('db-viewer-category')?.value || '';
                const type = document.getElementById('db-viewer-type')?.value || '';
                const residence = document.getElementById('db-viewer-residence')?.value || '';
                const gender = document.getElementById('db-viewer-gender')?.value || '';
                const prog = document.getElementById('db-viewer-prog')?.value || '';

                const activeBadge = document.getElementById('db-viewer-active-badge');
                if (activeBadge) {
                    const hasActive = Boolean(region || category || type || residence || gender || prog);
                    if (hasActive) activeBadge.classList.remove('hidden');
                    else activeBadge.classList.add('hidden');
                }

                let list = (this.schools || []).filter(s => {
                    if (category && (s.category || '').toUpperCase() !== category) return false;
                    if (region && (s.region || '').toLowerCase() !== region.toLowerCase()) return false;
                    if (type && (s.type || 'SHS').toUpperCase() !== type.toUpperCase()) return false;
                    if (gender && (s.gender || '').toLowerCase() !== gender.toLowerCase()) return false;
                    if (residence) {
                        const status = (s.status || s.res || '').toLowerCase();
                        if (residence === 'Day' && !status.includes('day')) return false;
                        if (residence === 'Boarding' && !status.includes('boarding')) return false;
                        if (residence === 'Day/Boarding' && (!status.includes('day') || !status.includes('boarding'))) return false;
                    }
                    if (prog) {
                        const schoolProgs = this.getSchoolProgramNames(s).map(p => p.toLowerCase());
                        if (!schoolProgs.some(p => p.includes(prog.toLowerCase()))) return false;
                    }
                    if (search) {
                        const text = `${s.code || ''} ${s.name || ''} ${s.district || ''} ${s.region || ''} ${s.location || ''} ${(s.progs || []).join(' ')}`.toLowerCase();
                        if (!text.includes(search)) return false;
                    }
                    return true;
                });

                // Sort
                const sortKey = this.dbViewerSortKey || 'name';
                const sortDir = this.dbViewerSortDir === 'desc' ? -1 : 1;
                list.sort((a, b) => {
                    let valA = String(a[sortKey] || '').toLowerCase();
                    let valB = String(b[sortKey] || '').toLowerCase();
                    if (valA < valB) return -1 * sortDir;
                    if (valA > valB) return 1 * sortDir;
                    return 0;
                });

                this.dbViewerFilteredList = list;

                // Pagination
                const pageSize = 50;
                const totalItems = list.length;
                const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
                if (this.dbViewerPage > totalPages) this.dbViewerPage = totalPages;
                if (this.dbViewerPage < 1) this.dbViewerPage = 1;

                const startIdx = (this.dbViewerPage - 1) * pageSize;
                const endIdx = Math.min(startIdx + pageSize, totalItems);
                const pageItems = list.slice(startIdx, endIdx);

                // Update counts & UI
                const countBadge = document.getElementById('db-viewer-count');
                if (countBadge) countBadge.textContent = `${this.schools ? this.schools.length : 0} Total in Database`;

                const summaryStats = document.getElementById('db-viewer-summary-stats');
                if (summaryStats) {
                    summaryStats.textContent = totalItems === 0 ? 'No matching schools found' : `Showing ${startIdx + 1}–${endIdx} of ${totalItems} filtered schools`;
                }

                const pageInfo = document.getElementById('db-viewer-pagination-info');
                if (pageInfo) {
                    pageInfo.textContent = `Page ${this.dbViewerPage} of ${totalPages} (${totalItems} total results)`;
                }

                const prevBtn = document.getElementById('db-viewer-prev-btn');
                const nextBtn = document.getElementById('db-viewer-next-btn');
                if (prevBtn) prevBtn.disabled = this.dbViewerPage <= 1;
                if (nextBtn) nextBtn.disabled = this.dbViewerPage >= totalPages;

                // Render table rows & mobile badge cards
                const tbody = document.getElementById('db-viewer-tbody');
                const mobileContainer = document.getElementById('db-viewer-mobile-container');

                if (pageItems.length === 0) {
                    if (tbody) {
                        tbody.innerHTML = `
                            <tr>
                                <td colspan="10" class="p-8 text-center text-slate-500">
                                    <i class="fa-solid fa-folder-open text-2xl text-slate-300 block mb-2"></i>
                                    No schools match your active search filter criteria. Try resetting filters.
                                </td>
                            </tr>
                        `;
                    }
                    if (mobileContainer) {
                        mobileContainer.innerHTML = `
                            <div class="p-8 text-center text-slate-500 bg-white rounded-xl border border-slate-200">
                                <i class="fa-solid fa-folder-open text-2xl text-slate-300 block mb-2"></i>
                                No schools match your active search filter criteria. Try resetting filters.
                            </div>
                        `;
                    }
                    return;
                }

                if (tbody) {
                    tbody.innerHTML = pageItems.map(s => {
                        const progsList = this.getSchoolProgramNames(s);
                        const progBadges = progsList.map(p => `<span class="inline-block px-1.5 py-0.5 m-0.5 text-[10px] rounded font-medium bg-slate-100 text-slate-700 border border-slate-200">${p}</span>`).join('');
                        const catBadgeClass = s.category === 'A' ? 'bg-emerald-100 text-emerald-800 border-emerald-300' : s.category === 'B' ? 'bg-sky-100 text-sky-800 border-sky-300' : 'bg-amber-100 text-amber-800 border-amber-300';
                        const typeBadgeClass = s.type === 'TVET' ? 'bg-amber-100 text-amber-800' : s.type === 'SHTS' ? 'bg-blue-100 text-blue-800' : s.type === 'STEM' ? 'bg-fuchsia-100 text-fuchsia-800' : 'bg-slate-200 text-slate-800';

                        const choiceSelectOptions = [0, 1, 2, 3, 4, 5, 6, 7].map(choiceIdx => {
                            const currentChoice = (this.selectedChoices || [])[choiceIdx];
                            const isThisSchool = currentChoice && (currentChoice.code === s.code);
                            const shortName = currentChoice ? (currentChoice.name.length > 18 ? currentChoice.name.substring(0, 16) + '...' : currentChoice.name) : 'Empty';
                            return `<option value="${choiceIdx}" class="text-slate-900 bg-white font-medium">${isThisSchool ? '✓ ' : ''}Choice ${choiceIdx + 1}: ${shortName}</option>`;
                        }).join('');

                        return `
                            <tr class="hover:bg-slate-50 transition border-b border-slate-100">
                                <td class="p-3 font-mono font-bold text-slate-700 text-[11px]">${s.code || '—'}</td>
                                <td class="p-3 font-bold text-slate-900">${s.name || '—'}</td>
                                <td class="p-3 font-medium text-slate-700">${s.region || '—'}</td>
                                <td class="p-3 text-slate-600">${s.district || s.location || '—'}</td>
                                <td class="p-3 text-center">
                                    <span class="px-2 py-0.5 rounded text-[10px] font-extrabold border ${catBadgeClass}">Cat ${s.category || '—'}</span>
                                </td>
                                <td class="p-3 text-center">
                                    <span class="px-2 py-0.5 rounded text-[10px] font-bold ${typeBadgeClass}">${s.type || 'SHS'}</span>
                                </td>
                                <td class="p-3 text-center font-medium text-slate-700">${s.gender || 'Mixed'}</td>
                                <td class="p-3 text-slate-700 font-medium">${s.status || s.res || 'Day/Boarding'}</td>
                                <td class="p-3">${progBadges || '<span class="text-slate-400 font-italic">General</span>'}</td>
                                <td class="p-3 text-center bg-amber-50/40 border-l border-slate-100">
                                    <select onchange="app.assignSchoolToChoice('${s.code}', parseInt(this.value)); this.value='';" class="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-lg px-2.5 py-1 text-[11px] shadow-sm transition focus:ring-2 focus:ring-emerald-500 cursor-pointer">
                                        <option value="" selected disabled>+ Set Choice ▾</option>
                                        ${choiceSelectOptions}
                                    </select>
                                </td>
                            </tr>
                        `;
                    }).join('');
                }

                if (mobileContainer) {
                    mobileContainer.innerHTML = pageItems.map(s => {
                        const progsList = this.getSchoolProgramNames(s);
                        const progBadges = progsList.map(p => `<span class="inline-block px-1.5 py-0.5 text-[10px] rounded font-medium bg-slate-100 text-slate-700 border border-slate-200 mr-1 mb-1">${p}</span>`).join('');
                        const catBadgeClass = s.category === 'A' ? 'bg-emerald-100 text-emerald-800 border-emerald-300' : s.category === 'B' ? 'bg-sky-100 text-sky-800 border-sky-300' : 'bg-amber-100 text-amber-800 border-amber-300';
                        const typeBadgeClass = s.type === 'TVET' ? 'bg-amber-100 text-amber-800' : s.type === 'SHTS' ? 'bg-blue-100 text-blue-800' : s.type === 'STEM' ? 'bg-fuchsia-100 text-fuchsia-800' : 'bg-slate-200 text-slate-800';

                        const choiceSelectOptions = [0, 1, 2, 3, 4, 5, 6, 7].map(choiceIdx => {
                            const currentChoice = (this.selectedChoices || [])[choiceIdx];
                            const isThisSchool = currentChoice && (currentChoice.code === s.code);
                            const shortName = currentChoice ? (currentChoice.name.length > 18 ? currentChoice.name.substring(0, 16) + '...' : currentChoice.name) : 'Empty';
                            return `<option value="${choiceIdx}" class="text-slate-900 bg-white font-medium">${isThisSchool ? '✓ ' : ''}Choice ${choiceIdx + 1}: ${shortName}</option>`;
                        }).join('');

                        return `
                            <div class="bg-white rounded-xl border border-slate-200 p-3 shadow-sm space-y-2">
                                <div class="flex items-start justify-between gap-2">
                                    <div>
                                        <div class="font-bold text-slate-900 text-xs leading-snug">${s.name || '—'}</div>
                                        <div class="text-[11px] text-slate-500 font-medium flex items-center gap-1.5 mt-0.5">
                                            <span class="font-mono text-slate-600 font-bold">#${s.code || '—'}</span>
                                            <span>•</span>
                                            <span>${s.region || '—'}</span>
                                            <span>•</span>
                                            <span>${s.district || s.location || '—'}</span>
                                        </div>
                                    </div>
                                    <span class="px-2 py-0.5 rounded text-[10px] font-extrabold border shrink-0 ${catBadgeClass}">Cat ${s.category || '—'}</span>
                                </div>

                                <div class="flex flex-wrap items-center gap-1.5 text-[10px]">
                                    <span class="px-2 py-0.5 rounded font-bold ${typeBadgeClass}">${s.type || 'SHS'}</span>
                                    <span class="px-2 py-0.5 rounded font-medium bg-slate-100 text-slate-700 border border-slate-200">${s.gender || 'Mixed'}</span>
                                    <span class="px-2 py-0.5 rounded font-medium bg-slate-100 text-slate-700 border border-slate-200">${s.status || s.res || 'Day/Boarding'}</span>
                                </div>

                                ${progBadges ? `<div class="pt-1 border-t border-slate-100 flex flex-wrap">${progBadges}</div>` : ''}

                                <div class="pt-1.5 flex items-center gap-2">
                                    <select onchange="app.assignSchoolToChoice('${s.code}', parseInt(this.value)); this.value='';" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-lg px-3 py-1.5 text-xs shadow-sm transition focus:ring-2 focus:ring-emerald-500 cursor-pointer">
                                        <option value="" selected disabled>+ Set as Choice (1–8) ▾</option>
                                        ${choiceSelectOptions}
                                    </select>
                                </div>
                            </div>
                        `;
                    }).join('');
                }
            }

            prevDatabaseViewerPage() {
                if (this.dbViewerPage > 1) {
                    this.dbViewerPage--;
                    this.filterDatabaseViewer();
                }
            }

            nextDatabaseViewerPage() {
                const pageSize = 50;
                const totalItems = (this.dbViewerFilteredList || []).length;
                const totalPages = Math.ceil(totalItems / pageSize);
                if (this.dbViewerPage < totalPages) {
                    this.dbViewerPage++;
                    this.filterDatabaseViewer();
                }
            }

            exportDatabaseAsCSV() {
                const list = this.dbViewerFilteredList || this.schools || [];
                if (!list.length) return;

                const headers = ["School Code", "School Name", "Region", "District", "Category", "Type", "Gender", "Residence Status", "Programmes Offered"];
                const rows = list.map(s => [
                    `"${s.code || ''}"`,
                    `"${(s.name || '').replace(/"/g, '""')}"`,
                    `"${(s.region || '').replace(/"/g, '""')}"`,
                    `"${(s.district || s.location || '').replace(/"/g, '""')}"`,
                    `"${s.category || ''}"`,
                    `"${s.type || 'SHS'}"`,
                    `"${s.gender || 'Mixed'}"`,
                    `"${s.status || s.res || ''}"`,
                    `"${(this.getSchoolProgramNames(s).join(', ')).replace(/"/g, '""')}"`
                ]);

                const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
                const encodedUri = encodeURI(csvContent);
                const link = document.createElement("a");
                link.setAttribute("href", encodedUri);
                link.setAttribute("download", `GES_TVET_School_Database_${new Date().toISOString().slice(0,10)}.csv`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }

        // Initialize Application
        window.BECEApp = BECEApp;
