function decodeBase64(str) {
    return atob(str);
}

function checkCodes() {
    var code1 = document.getElementById('code1').value;
    var code2 = document.getElementById('code2').value;
    var result = document.getElementById('result');

    result.innerHTML = "code1 = " + code1 + "<br>";

    if (code1 === "clnllcl") {
        result.innerHTML += "code2 = " + code2 + "<br>";
        if (code2 === "0.04347826087") {
            var encodedLink = "aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3VzZXIvMzFtdzJ4eXN4cW41eGRjdmIzZmZubGZ5amx0eT9zaT0wY1hCRkFHN1FiQ2tjNVVZVHpCUlFX";
            result.innerHTML += '<a href="' + decodeBase64(encodedLink) + '">Spotify Link</a>';
        } else {
            result.innerHTML += "you are a failure";
        }
    } else {
        result.innerHTML += "you are a failure";
    }
}
