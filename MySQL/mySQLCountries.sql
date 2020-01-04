SELECT countries.name, languages.language, languages.percentage FROM countries
JOIN languages ON countries.code = languages.country_code
WHERE language = 'Slovene'
ORDER BY percentage DESC;