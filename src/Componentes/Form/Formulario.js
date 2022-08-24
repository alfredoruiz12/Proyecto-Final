import React from "react";

function Formulario() {
  return (
    <body>
      <div>
        <form className="form-section container">
          <h1 className="text-dark font-weight-bold text-center ">
            Detalles Generales
          </h1>
          <div className="row">
            <div className="col-md-4 col-sm-12 form-group">
              <label className="form-label text-dark fs-5"> Nombre</label>
              <input
                className="form-control"
                placeholder="Alfredo"
                required
                type="text"
                minlength="10"
                maxlength="30"
              ></input>
            </div>
            <div className="col-md-4 col-sm-12 form-group">
              <label className="form-label text-dark fs-5"> Apellido</label>
              <input
                className="form-control"
                placeholder=" Ruiz"
                required
                type="text"
                minlength="10"
                maxlength="30"
              ></input>
            </div>
            <div className="col-md-4 col-sm-12 form-group">
              <label className="form-label text-dark fs-5">Genero</label>
              <select requierd className="form-control fs-5">
                <option className="fs-5" value="hombre">
                  hombre
                </option>
                <option className="fs-5" value="mujer">
                  mujer
                </option>
                <option className="fs-5" value="otro">
                  otro
                </option>
              </select>
            </div>
          </div>
          <div className="mt-5">
            <div className="row">
              <div className="col-md-4 col-sm-12 form-group">
                <label className="form-label text-dark fs-5">
                  {" "}
                  Telefono Celular
                </label>
                <input
                  className="form-control"
                  placeholder="381 5874 287"
                  required
                  type="number"
                ></input>
              </div>
              <div className="col-md-4 col-sm-12 form-group">
                <label className="form-label text-dark fs-5"> Email</label>
                <input
                  className="form-control"
                  placeholder=" Ruiz@outlook.com"
                  required
                  type="email"
                ></input>
              </div>
              <div className="col-md-4 col-sm-12 form-group">
                <label className="form-label text-dark fs-5">Direccion</label>
                <input
                  className="form-control"
                  placeholder="Direc-numeracion-ciudad"
                  required
                  type="text"
                ></input>
              </div>
              <div className="form-group col-md-12 py-4">
                <label className="form-label text-dark fs-5">
                  Detalles Personales
                </label>
                <textarea
                  className="  form-control   "
                  rows="6"
                  minlength="50"
                  maxlength="500"
                  requiered
                  type="text"
                  placeholder="Detalles de Tu Vida En General"
                ></textarea>
              </div>
            </div>
            <h1 className="display-6 text-dark text-center py-4 ">
              Detalles Sociales
            </h1>
            <div className="row">
              <div className="form-group col-md-4 col-sm-12">
                <label className="form-label fs-5 text-dark">
                  Redes Sociales
                </label>
                <select required className="form-control">
                  <option value="lidkedin">Lidkedin</option>
                  <option value="GitHub">GitHub</option>
                  <option value="Porfolio Sitio Web">Porfolio Sitio Web</option>
                </select>
              </div>
              <div className="col-md-4 col-sm-12 form-row">
                <label className="form-label fs-5 text-dark">Usuarios</label>
                <input
                  className="form-control"
                  placeholder="alfredoGithub"
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-4 col-sm-12">
                <label className="form-label fs-5 text-dark">
                  Redes Sociales
                </label>
                <select required className="form-control">
                  <option value="lidkedin">Lidkedin</option>
                  <option value="GitHub">GitHub</option>
                  <option value="Porfolio Sitio Web">Porfolio Sitio Web</option>
                </select>
              </div>
              <div className="col-md-4 col-sm-12 form-row">
                <label className="form-label fs-5 text-dark">Usuarios</label>
                <input
                  className="form-control"
                  placeholder="alfredoGithub"
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-4 col-sm-12">
                <label className="form-label fs-5 text-dark">
                  Redes Sociales
                </label>
                <select required className="form-control">
                  <option value="lidkedin">Lidkedin</option>
                  <option value="GitHub">GitHub</option>
                  <option value="Porfolio Sitio Web">Porfolio Sitio Web</option>
                </select>
              </div>
              <div className="col-md-4 col-sm-12 form-row">
                <label className="form-label fs-5 text-dark">Usuarios</label>
                <input
                  className="form-control"
                  placeholder="alfredoGithub"
                ></input>
              </div>
            </div>
            <h1 className="text-dark text-center display-5 py-4">
              Educacion (agrega 2 experiencias)
            </h1>
            <div className="row">
              <div className="form-row col-md-6 col-sm-12">
                <label className="form-label text-dark fs-5">Título de bachillerato</label>
                <input className="form-control" requierd type="text" minlength="10" maxlength="50"placeholder="EJ: ciencias sociales"></input>
              </div>
              <div className="form-row col-md-6 col-sm-12">
                <label className="form-label text-dark fs-5">Nombre de la Institucion</label>
                <input className="form-control" requierd type="text" minlength="10" maxlength="50"placeholder="Ej:Colegio Santo Tomas"></input>
              </div>
              <div className="row">
              <div className="form-group col-md-4 col-sm-12">
                <label className="form-label text-primary">Fecha de Inicio</label>
                <input className="form-control" requiered type="date"></input>
              </div>
              <div className="form-group col-md-4 col-sm-12">
                <label className="form-label text-primary">Fecha de Inicio</label>
                <input className="form-control" requiered type="date"></input>
              </div>
              <div className="form-group col-md-12 col-sm-12">
                <label className="form-label text-dark fs-5">Describe Tu Experiencia</label>
                <textarea className="form-control "rows="6" required type="text" minlength="50" maxlength="200" placeholder="Experiencia"></textarea>
              </div>
              </div>
            </div>
            <div className="row py-3">
              <div className="form-row col-md-6 col-sm-12">
                <label className="form-label text-dark fs-5">Título universitario</label>
                <input className="form-control" requierd type="text" minlength="10" maxlength="50"placeholder="EJ:Ing.En Sistemas"></input>
              </div>
              <div className="form-row col-md-6 col-sm-12">
                <label className="form-label text-dark fs-5">Nombre de la Universidad</label>
                <input className="form-control" requierd type="text" minlength="10" maxlength="50"placeholder="Uni.Tecnologica"></input>
              </div>
              <div className="row py-3">
              <div className="form-group col-md-4 col-sm-12 py-3">
                <label className="form-label">Fecha de Inicio</label>
                <input className="form-control" requiered type="date"></input>
              </div>
              <div className="form-group col-md-4 col-sm-12 py-3">
                <label className="form-label">Fecha de Finalizacion</label>
                <input className="form-control" requiered type="date"></input>
              </div>
              <div className="form-group col-md-12 col-sm-12">
                <label className="form-label text-dark fs-5">Describe Tu Experiencia</label>
                <textarea className="form-control "rows="6" required type="text" minlength="50" maxlength="200" placeholder="Experiencia"></textarea>
              </div>
              </div>
            </div>
            <h1 className="text-dark text-center display-5 py-4">
              Experiencias Laborales  (agrega 3 experiencias)
            </h1>
            <div className="row">
              <div className="form-row col-md-6 col-sm-12">
                <label className="form-label text-dark fs-5">Primer Experiencia</label>
                <input className="form-control" requierd type="text" minlength="10" maxlength="50"placeholder="Devolper. Junior"></input>
              </div>
              <div className="form-row col-md-6 col-sm-12">
                <label className="form-label text-dark fs-5">Nombre Empresa</label>
                <input className="form-control" requierd type="text" minlength="10" maxlength="50"placeholder="Ej:Google"></input>
              </div>
              <div className="row">
              <div className="form-group col-md-4 col-sm-12 py-3">
                <label className="form-label text-primary">Fecha de Inicio</label>
                <input className="form-control" requiered type="date"></input>
              </div>
              <div className="form-group col-md-4 col-sm-12 py-3">
                <label className="form-label text-primary">Fecha de Finalizacion</label>
                <input className="form-control" requiered type="date"></input>
              </div>
              <div className="form-group col-md-12 col-sm-12">
                <label className="form-label text-dark fs-5">Tedalles Laborales</label>
                <textarea className="form-control "rows="6" required type="text" minlength="50" maxlength="200" placeholder="Experiencia"></textarea>
              </div>
              </div>
            </div>
            <div className="row">
              <div className="form-row col-md-6 col-sm-12">
                <label className="form-label text-dark fs-5">Segunda Experiencia</label>
                <input className="form-control" requierd type="text" minlength="10" maxlength="50"placeholder="Devolper. Junior"></input>
              </div>
              <div className="form-row col-md-6 col-sm-12">
                <label className="form-label text-dark fs-5">Nombre Empresa</label>
                <input className="form-control" requierd type="text" minlength="10" maxlength="50"placeholder="Ej:Google"></input>
              </div>
              <div className="row">
              <div className="form-group col-md-4 col-sm-12 py-3">
                <label className="form-label text-primary">Fecha de Inicio</label>
                <input className="form-control" requiered type="date"></input>
              </div>
              <div className="form-group col-md-4 col-sm-12 py-3">
                <label className="form-label text-primary">Fecha de Finalizacion</label>
                <input className="form-control" requiered type="date"></input>
              </div>
              <div className="form-group col-md-12 col-sm-12">
                <label className="form-label text-dark fs-5">Tedalles Laborales</label>
                <textarea className="form-control "rows="6" required type="text" minlength="50" maxlength="200" placeholder="Experiencia"></textarea>
              </div>
              </div>
            </div>
            <div className="row">
              <div className="form-row col-md-6 col-sm-12">
                <label className="form-label text-dark fs-5">tercera Experiencia</label>
                <input className="form-control" requierd type="text" minlength="10" maxlength="50"placeholder="Devolper. Junior"></input>
              </div>
              <div className="form-row col-md-6 col-sm-12">
                <label className="form-label text-dark fs-5">Nombre Empresa</label>
                <input className="form-control" requierd type="text" minlength="10" maxlength="50"placeholder="Ej:Google"></input>
              </div>
              <div className="row">
              <div className="form-group col-md-4 col-sm-12 py-3">
                <label className="form-label text-primary">Fecha de Inicio</label>
                <input className="form-control" requiered type="date"></input>
              </div>
              <div className="form-group col-md-4 col-sm-12 py-3">
                <label className="form-label text-primary">Fecha de Finalizacion</label>
                <input className="form-control" requiered type="date"></input>
              </div>
              <div className="form-group col-md-12 col-sm-12">
                <label className="form-label text-dark fs-5">Tedalles Laborales</label>
                <textarea className="form-control "rows="6" required type="text" minlength="50" maxlength="200" placeholder="Experiencia"></textarea>
              </div>
              </div>
            </div>
            <div className="form-group col-md-12 col-sm-12">
                <label className="form-label text-dark fs-5">Cualidades Personales (skill)</label>
                <textarea className="form-control "rows="6" required type="text" minlength="50" maxlength="200" placeholder="Cualidades"></textarea>
              </div>
          </div>
          <div className="col-md-12 sm-12  my-4">
          <button className="btn btn-dark w-100 fs-4 " type="button">GENERAR CV</button>
          </div>
          </form>
        
      </div>
    </body>
  );
}

export default Formulario;
