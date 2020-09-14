
/*
    This a comprehensive array of all units that will be recognized by the chrome extenison
    Each Unit will have 3 attributes : 
    1) unit : this the name of the unit that we plan to recongnize
    2) type : what type of attribute the unit represents : LENGTH, TIME, CURRENCY etc.
    3) aliases : what other representations the unit has 
*/

const UNITS = [
    {
        unit: "meters",
        type: "length",
        aliases: ["meter", "meters"]
    },
    {
        unit: "kilograms",
        type: "mass",
        aliases: ["kilograms", "kgs"]
    },
    {
        units: "seconds",
        type: "time",
        aliases: ["seconds", "sec", "s"]
    },
    {
        unit: "celcius",
        type: "temperature",
        aliases: ["celcius", "c", "°c"]
    },
    {
        unit: "fahrenheit",
        type: "temperature",
        aliases: ["fahrenheit", "f", "°f"]
    },
    {
        unit: "kelvin",
        type: "temperature",
        aliases: ["kelvin", "k", "°k"]
    },
    {
        unit: "meters",
        type: "length",
        aliases: ["meter", "meters", "m", "mts"]
    },
    {
        unit: "kilometers",
        type: "length",
        aliases: ["kilometer", "kilometers", "km", "kms"]
    },
    {
        unit: "miles",
        type: "length",
        aliases: ["miles", "mile", "mi"]
    },
    {
        unit: "centimeters",
        type: "length",
        aliases: ["centimeter", "centimeters", "cm", "cms"]
    },
    {
        unit: "millimeters",
        type: "length",
        aliases: ["millimeter", "millimeters", "mm", "mms"]
    },
    {
        unit: "micrometers",
        type: "length",
        aliases: ["micrometer", "micrometers", "µm", "µms"]
    },
    {
        unit: "yard",
        type: "length",
        aliases: ["yard", "yards", "yd", "yds"]
    },
    {
        unit: "feet",
        type: "length",
        aliases: ["foot", "feet", "ft", "fts"]
    },
    {
        unit: "inch",
        type: "length",
        aliases: ["inches", "inch", "\""]
    },
    {
        unit: "furlong",
        type: "length",
        aliases: ["furlong", "furlongs", "fur", "furss"]
    },
    {
        unit: "chain",
        type: "length",
        aliases: ["chain", "chains"]
    },

]


