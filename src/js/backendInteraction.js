
/*-------
    Purpose: Create an SQL query from a json object
    Parameters: input, a json object
    Return: A string representing the SQL query
-------*/
function generateQuery(input){
    var region;
    var breed;
    var lowerAge;
    var upperAge;
    var lowerWeight;
    var upperWeight;
    var gender;
    var lowerHeight;
    var upperHeight;
    var queryString;

    if(input){
        switch (input.region) {
            case "region0":
                region = "IS NOT NULL";
                break;
            case "region1":
                region = " = 'Canada'";
                break;
            case "region2":
                region = " = 'United States'";
                break;
        }

        switch (input.catBreed) {
            case "catBreed0":
                breed = "IS NOT NULL";
                break;
            case "catBreed1":
                breed = " = 'British Shorthair'";
                break;
            case "catBreed2":
                breed = " = 'Siamese'";
                break;
            case "catBreed3":
                breed = " = 'Persian'";
                break;
            case "catBreed4":
                breed = " = 'Maine Coon'";
                break;
        }

        switch (input.age) {
            case "age0":
                lowerAge = "IS NOT NULL";
                upperAge = "IS NOT NULL";
                break;
            case "age1":
                lowerAge = "IS NOT NULL";
                upperAge = " < 1";
                break;
            case "age2":
                lowerAge = " >= 1";
                upperAge = " <= 2";
                break;
            case "age3":
                lowerAge = " >= 3";
                upperAge = " <= 6";
                break;
            case "age4":
                lowerAge = " > 6";
                upperAge = "IS NOT NULL";
                break;
        }

        switch (input.weight) {
            case "weight0":
                lowerWeight = "IS NOT NULL";
                upperWeight = "IS NOT NULL";
                break;
            case "weight1":
                lowerWeight = "IS NOT NULL";
                upperWeight = " <= 2";
                break;
            case "weight2":
                lowerWeight = " >= 3";
                upperWeight = " <= 4";
                break;
            case "weight3":
                lowerWeight = " >= 5";
                upperWeight = " <= 10";
                break;
            case "weight4":
                lowerWeight = " > 10";
                upperWeight = "IS NOT NULL";
                break;
        }

        switch (input.gender) {
            case "gender0":
                gender = "IS NOT NULL";
                break;
            case "gender1":
                gender = "= 'Male'";
                break;
            case "gender2":
                gender = "= 'Female'";
                break;
            case "gender3":
                gender = "= 'Other'";
                break;
        }

        switch (input.height) {
            case "height0":
                lowerHeight = "IS NOT NULL";
                upperHeight = "IS NOT NULL";
                break;
            case "height1":
                lowerHeight = " >= 1";
                upperHeight = " <= 10";
                break;
            case "height2":
                lowerHeight = " >= 11";
                upperHeight = " <= 20";
                break;
            case "height3":
                lowerHeight = " >= 21";
                upperHeight = " <= 30";
                break;
            case "height4":
                lowerHeight = " > 30";
                upperHeight = "IS NOT NULL";
                break;
        }

        queryString = "SELECT * FROM Cats WHERE region " + region + " AND catBreed " + breed + " AND age " + lowerAge + " AND age " + upperAge +
                      " AND weight " + lowerWeight + " AND weight " + upperWeight + " AND gender " + gender + " AND height " + lowerHeight + " AND height " + upperHeight;

        return queryString;

    }
    else {
        return "";
    }
}
