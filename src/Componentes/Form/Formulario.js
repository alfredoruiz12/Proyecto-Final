
function Formulario() {
  const ValidateInput = (input) => {
    if (input.target.value.trim().length < 1) {
      input.target.className = "form-control is-invalid";

      return false;
    } else {
      input.target.className = "form-control is-valid";
      return true;
    }
  };


 

  return (
    
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
                minLength="0"
                maxLength="30"
                onBlur={ValidateInput}
              ></input>
            </div>
            <div className="col-md-4 col-sm-12 form-group">
              <label className="form-label text-dark fs-5"> Apellido</label>
              <input
                className="form-control"
                placeholder=" Ruiz"
                required
                type="text"
                minLength="0"
                maxLength="30"
                onBlur={ValidateInput}
              ></input>
            </div>

            <div className="col-md-4 col-sm-12 form-group">
              <label className="form-label text-dark fs-5">Genero</label>
              <select requierd className="form-control fs-6">
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
          <div className=" row">
            <div className="col-md-4 col-sm-12 form-group">
              <label className="form-label text-dark fs-5"> Edad</label>
              <input
                className="form-control"
                placeholder="15"
                required
                type="number"
                minLength="0"
                maxLength="30"
                onBlur={ValidateInput}
              ></input>
            </div>
            <div className="col-md-4 col-sm-12 form-group ">
              <label className="form-label text-dark fs-5"> Profesion</label>
              <input
                className="form-control"
                placeholder=" Actor"
                required
                type="text"
                minLength="0"
                maxLength="30"
                onBlur={ValidateInput}
              ></input>
            </div>
            <div className="col-md-4 col-sm-12 form-group ">
              <label className="form-label text-dark fs-5">
                
                Pais y ciudad
              </label>
              <input
                className="form-control"
                placeholder=" Argentina, Tucuman"
                required
                type="text"
                minLength="0"
                maxLength="30"
                onBlur={ValidateInput}
              ></input>
            </div>
            <div className="row mt-3">
              <div className="col-md-4 col-sm-12 form-group">
                <label className="form-label text-dark fs-5">
                  Telefono Celular
                </label>
                <input
                  className="form-control"
                  placeholder="381 5874 287"
                  required
                  type="number"
                  onBlur={ValidateInput}
                ></input>
              </div>
              <div className="col-md-4 col-sm-12 form-group">
                <label className="form-label text-dark fs-5"> Email</label>
                <input
                  className="form-control"
                  placeholder=" Ruiz@outlook.com"
                  required
                  type="email"
                  onBlur={ValidateInput}
                ></input>
              </div>
              <div className="col-md-4 col-sm-12 form-group">
                <label className="form-label text-dark fs-5">Direccion</label>
                <input
                  className="form-control"
                  placeholder="Direc-numeracion-ciudad"
                  required
                  type="text"
                  onBlur={ValidateInput}
                ></input>
              </div>
              <div className="form-group col-md-12 py-4">
                <label className="form-label text-dark fs-5">
                  Detalles Personales
                </label>
                <textarea
                  className="  form-control   "
                  rows="6"
                  minLength="10"
                  maxLength="500"
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
                <label className="form-label text-dark fs-5">
                  Título de bachillerato
                </label>
                <input
                  className="form-control"
                  requierd
                  type="text"
                  minLength="10"
                  maxLength="50"
                  placeholder="EJ: ciencias sociales"
                  onBlur={ValidateInput}
                ></input>
              </div>
              <div className="form-row col-md-6 col-sm-12">
                <label className="form-label text-dark fs-5">
                  Nombre de la Institucion
                </label>
                <input
                  className="form-control"
                  requierd
                  type="text"
                  minLength="10"
                  maxLength="50"
                  placeholder="Ej:Colegio Santo Tomas"
                  onBlur={ValidateInput}
                ></input>
              </div>
              <div className="row">
                <div className="form-group col-md-4 col-sm-12">
                  <label className="form-label text-primary">
                    Fecha de Inicio
                  </label>
                  <input
                    className="form-control"
                    requiered
                    type="date"
                    onBlur={ValidateInput}
                  ></input>
                </div>
                <div className="form-group col-md-4 col-sm-12">
                  <label className="form-label text-primary">
                    Fecha de Inicio
                  </label>
                  <input
                    className="form-control"
                    requiered
                    type="date"
                    onBlur={ValidateInput}
                  ></input>
                </div>
                <div className="form-group col-md-12 col-sm-12">
                  <label className="form-label text-dark fs-5">
                    Describe Tu Experiencia
                  </label>
                  <textarea
                    className="form-control "
                    rows="6"
                    required
                    type="text"
                    minLength="50"
                    maxLength="200"
                    placeholder="Experiencia"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row py-3">
              <div className="form-row col-md-6 col-sm-12">
                <label className="form-label text-dark fs-5">
                  Título universitario
                </label>
                <input
                  className="form-control"
                  requierd
                  type="text"
                  minLength="10"
                  maxLength="50"
                  placeholder="EJ:Ing.En Sistemas"
                  onBlur={ValidateInput}
                ></input>
              </div>
              <div className="form-row col-md-6 col-sm-12">
                <label className="form-label text-dark fs-5">
                  Nombre de la Universidad
                </label>
                <input
                  className="form-control"
                  requierd
                  type="text"
                  minLength="10"
                  maxLength="50"
                  placeholder="Uni.Tecnologica"
                  onBlur={ValidateInput}
                ></input>
              </div>
              <div className="row py-3">
                <div className="form-group col-md-4 col-sm-12 py-3">
                  <label className="form-label">Fecha de Inicio</label>
                  <input
                    className="form-control"
                    requiered
                    type="date"
                    onBlur={ValidateInput}
                  ></input>
                </div>
                <div className="form-group col-md-4 col-sm-12 py-3">
                  <label className="form-label">Fecha de Finalizacion</label>
                  <input
                    className="form-control"
                    requiered
                    type="date"
                    onBlur={ValidateInput}
                  ></input>
                </div>
                <div className="form-group col-md-12 col-sm-12">
                  <label className="form-label text-dark fs-5">
                    Describe Tu Experiencia
                  </label>
                  <textarea
                    className="form-control "
                    rows="6"
                    required
                    type="text"
                    minLength="50"
                    maxLength="200"
                    placeholder="Experiencia"
                  ></textarea>
                </div>
              </div>
            </div>
            <h1 className="text-dark text-center display-5 py-4">
              Experiencias Laborales (agrega 3 experiencias)
            </h1>
            <div className="row">
              <div className="form-row col-md-6 col-sm-12">
                <label className="form-label text-dark fs-5">
                  Primer Experiencia
                </label>
                <input
                  className="form-control"
                  requierd
                  type="text"
                  minLength="0"
                  maxLength="50"
                  placeholder="Devolper. Junior"
                  onBlur={ValidateInput}
                ></input>
              </div>
              <div className="form-row col-md-6 col-sm-12">
                <label className="form-label text-dark fs-5">
                  Nombre Empresa
                </label>
                <input
                  className="form-control"
                  requierd
                  type="text"
                  minLength="0"
                  maxLength="50"
                  placeholder="Ej:Google"
                  onBlur={ValidateInput}
                ></input>
              </div>
              <div className="row">
                <div className="form-group col-md-4 col-sm-12 py-3">
                  <label className="form-label text-primary">
                    Fecha de Inicio
                  </label>
                  <input
                    className="form-control"
                    requiered
                    type="date"
                    onBlur={ValidateInput}
                  ></input>
                </div>
                <div className="form-group col-md-4 col-sm-12 py-3">
                  <label className="form-label text-primary">
                    Fecha de Finalizacion
                  </label>
                  <input
                    className="form-control"
                    requiered
                    type="date"
                    onBlur={ValidateInput}
                  ></input>
                </div>
                <div className="form-group col-md-12 col-sm-12">
                  <label className="form-label text-dark fs-5">
                    Tedalles Laborales
                  </label>
                  <textarea
                    className="form-control "
                    rows="6"
                    required
                    type="text"
                    minLength="50"
                    maxLength="200"
                    placeholder="Experiencia"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-row col-md-6 col-sm-12">
                <label className="form-label text-dark fs-5">
                  Segunda Experiencia
                </label>
                <input
                  className="form-control"
                  requierd
                  type="text"
                  minLength="0"
                  maxLength="50"
                  placeholder="Devolper. Junior"
                ></input>
              </div>
              <div className="form-row col-md-6 col-sm-12">
                <label className="form-label text-dark fs-5">
                  Nombre Empresa
                </label>
                <input
                  className="form-control"
                  requierd
                  type="text"
                  minLength="0"
                  maxLength="50"
                  placeholder="Ej:Google"
                  onBlur={ValidateInput}
                ></input>
              </div>
              <div className="row">
                <div className="form-group col-md-4 col-sm-12 py-3">
                  <label className="form-label text-primary">
                    Fecha de Inicio
                  </label>
                  <input
                    className="form-control"
                    requiered
                    type="date"
                    onBlur={ValidateInput}
                  ></input>
                </div>
                <div className="form-group col-md-4 col-sm-12 py-3">
                  <label className="form-label text-primary">
                    Fecha de Finalizacion
                  </label>
                  <input
                    className="form-control"
                    requiered
                    type="date"
                    onBlur={ValidateInput}
                  ></input>
                </div>
                <div className="form-group col-md-12 col-sm-12">
                  <label className="form-label text-dark fs-5">
                    Tedalles Laborales
                  </label>
                  <textarea
                    className="form-control "
                    rows="6"
                    required
                    type="text"
                    minLength="50"
                    maxLength="200"
                    placeholder="Experiencia"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-row col-md-6 col-sm-12">
                <label className="form-label text-dark fs-5">
                  tercera Experiencia
                </label>
                <input
                  className="form-control"
                  requierd
                  type="text"
                  minLength="0"
                  maxLength="50"
                  placeholder="Devolper. Junior"
                  onBlur={ValidateInput}
                ></input>
              </div>
              <div className="form-row col-md-6 col-sm-12">
                <label className="form-label text-dark fs-5">
                  Nombre Empresa
                </label>
                <input
                  className="form-control"
                  requierd
                  type="text"
                  minLength="0"
                  maxLength="50"
                  placeholder="Ej:Google"
                  onBlur={ValidateInput}
                ></input>
              </div>
              <div className="row">
                <div className="form-group col-md-4 col-sm-12 py-3">
                  <label className="form-label text-primary">
                    Fecha de Inicio
                  </label>
                  <input className="form-control" requiered type="date"></input>
                </div>
                <div className="form-group col-md-4 col-sm-12 py-3">
                  <label className="form-label text-primary">
                    Fecha de Finalizacion
                  </label>
                  <input
                    className="form-control"
                    requiered
                    type="date"
                    onBlur={ValidateInput}
                  ></input>
                </div>
                <div className="form-group col-md-12 col-sm-12">
                  <label className="form-label text-dark fs-5">
                    Tedalles Laborales
                  </label>
                  <textarea
                    className="form-control "
                    rows="6"
                    required
                    type="text"
                    minLength="50"
                    maxLength="200"
                    placeholder="Experiencia"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="form-group col-md-12 col-sm-12">
              <label className="form-label text-dark fs-5">
                Cualidades Personales (skill)
              </label>
              <textarea
                className="form-control "
                rows="6"
                required
                type="text"
                minLength="50"
                maxLength="200"
                placeholder="Cualidades"
              ></textarea>
            </div>
          </div>
          <div className="col-md-12 sm-12  my-4">
            <button className="btn btn-dark w-100 fs-4 " type="submit" >
              GENERAR CV
            </button>
          </div>
          
        </form>
       
      </div>
    
  );
}

export default Formulario;
