import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { Button } from "../components/Buttons";

const Body = styled.div`
  background: linear-gradient(to right, #a5bfb2, #fff);
  height: 100vh;
  width: 100%;
  position: relative;
`;

const LandingPageContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

const Form = styled.form`
  max-width: 500px;
  margin: 80px auto;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  font-weight: bold;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.3rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  box-sizing: border-box;
  font-size: 11px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 0.3rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  box-sizing: border-box;
  font-size: 11px;
`;

const H1 = styled.h1`
  text-align: center;
  font-size: 30px;
  font-weight: bolder;
  text-transform: uppercase;
  color: rgb(65, 65, 65);
`;

const Label = styled.label`
  display: block;
  font-size: small;
  margin-bottom: 10px;
`;

const Logo = styled.img`
  margin-bottom: 20px;
  padding-top: 2rem;
  padding-left: 5rem;
  width: 210px;
  height: 85px;
`;

export const Landing: React.FC = () => {
  const [birthYear, setBirthYear] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [newsLetter, setNewsLetter] = useState<string>("");
  const [aanwezigOpeningsfeest, setAanwezigOpeningsfeest] =
    useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Body>
      <LandingPageContainer>
        <Logo src={logo} alt="Logo" />
        <H1>Registratie Open Dag CultuurHoek</H1>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="aanwezig_openingsfeest">
            Aanwezig bij openingsfeest op 24 september
          </Label>
          <Select
            id="aanwezig_openingsfeest"
            name="aanwezig_openingsfeest"
            value={aanwezigOpeningsfeest}
            onChange={(e) => setAanwezigOpeningsfeest(e.target.value)}
          >
            <option value="">Kies een optie</option>
            <option value="ja">Ja</option>
            <option value="nee">Nee</option>
          </Select>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Vul hier je emailadres in"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label htmlFor="birthYear">Leeftijd</Label>
          <Select
            id="birthYear"
            name="birthYear"
            value={birthYear}
            onChange={(e) => setBirthYear(e.target.value)}
          >
            <option value="">Kies een optie</option>
            <option value="">Wil ik liever niet zeggen</option>
            <option value="onder_30">Onder de 30 jaar</option>
            <option value="30-39">30 - 39 jaar</option>
            <option value="40-49">40 - 49 jaar</option>
            <option value="50-59">50 - 59 jaar</option>
            <option value="60-69">60 - 69 jaar</option>
            <option value="non-binair">70 jaar en ouder</option>
          </Select>

          <Label htmlFor="gender">Geslacht</Label>
          <Select
            id="gender"
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Kies een optie</option>
            <option value="">Zeg ik liever niet</option>
            <option value="man">Man</option>
            <option value="vrouw">Vrouw</option>
          </Select>

          <Label htmlFor="location">Woonplaats</Label>
          <Select
            id="location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Kies een optie</option>
            <option value="">Wil ik liever niet zeggen</option>
            <option value="Driebergen-Rijsenburg">Driebergen-Rijsenburg</option>
            <option value="andere_heuvelrug">
              Andere plaats in de gemeente Utrechtste Heuvelrug
            </option>
            <option value="overig">Overig</option>
          </Select>

          <Label htmlFor="news_letter">Abonneren op de nieuwsbrief</Label>
          <Select
            id="news_letter"
            name="news_letter"
            value={newsLetter}
            onChange={(e) => setNewsLetter(e.target.value)}
          >
            <option value="">Kies een optie</option>
            <option value="ja">Ja</option>
          </Select>
          <Button type="submit">Verstuur</Button>
        </Form>
      </LandingPageContainer>
    </Body>
  );
};
export default Landing;
