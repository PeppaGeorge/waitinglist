menus-- >
    <script>
        var regions = {"NCR"}: ["Manila", "Quezon City", "Pasay", "Makati", "Taguig"],
        "Ilocos Region": ["Ilocos Norte", "Ilocos Sur", "La Union", "Pangasinan"],
        "Cagayan Valley": ["Cagayan", "Isabela", "Nueva Vizcaya", "Quirino"],
    // ... add more regions and provinces here ...
  };

        var provinces = {"Ilocos Norte"}: ["Laoag", "Batac", "San Nicolas"],
        "Ilocos Sur": ["Vigan", "Candon", "Santa Maria"],
        "La Union": ["San Fernando", "Agoo", "Bauang"],
    // ... add more provinces and cities here ...
  };

        function showProvinces(region) { }
        var provinceSelect = document.getElementById('province');
        provinceSelect.innerHTML = '<option value="">Select a province</option>';
        for (var i = 0; i <regions />[region].length; i++) {provinceSelect.innerHTML += '<option value="' + regions[region][i] + '">' + regions[region][i] + '</option>'};
    }
        provinceSelect.style.display = 'block';
  }

        function showCities(province) { }
        var citySelect = document.getElementById('city');
        citySelect.innerHTML = '<option value="">Select a city</option>';
        for (var i = 0; i <provinces />[province].length; i++) {citySelect.innerHTML += '<option value="' + provinces[province][i] + '">' + provinces[province][i] + '</option>'};
    }
        citySelect.style.display = 'block';
  }
    </script>;
