angular.module('starter.services', [])

.factory('IonicLogin', function( $http, $state, $ionicPopup, $ionicLoading, $rootScope) {

	function teste(tst){

		$ionicPopup.alert({
			title: 'Teste',
			template: 'Chegou no post.'
		});

		$http.post("http://172.17.0.13:3000/teste",
		    { params: {
				"livtst": tst}
		    })
		.success(function(response) {
			$ionicLoading.hide();
		})
		.error(function(response) {
			$ionicLoading.hide();
		});
	}

	function adicionarPessoa(userLoged, email){

		$http.post("http://172.17.0.13:3000/adicionarPessoa",
			{ params: {
				//"relacao_de": userLoged,
				"userEmail": userLoged,
				"relacao_para": email
				}
			})
		.success(function(response) {
			if ( response == "EXISTING_FRIENDSHIP" ){
						$ionicPopup.alert({
						 	title: 'Alerta',
							template: 'Essa pessoa já é sua amiga'
						});
			}
			else{
				$ionicPopup.alert({
					title: 'Sucesso',
					template: 'Solicitação de amizade enviada com sucesso!'
				});
				$ionicLoading.hide();
			}
		})
		.error(function(response) {
			$ionicPopup.alert({
				title: 'Erro',
				template: 'Algo deu errado'
			});
			$ionicLoading.hide();
		});
	}

	function aceitarAmizade(userLoged, email){

		/*$ionicPopup.alert({
			title: 'services',
			template: 'aceitarAmizade'
		});*/

		$http.post("http://172.17.0.13:3000/aceitarAmizade",
			{ params: {
				"relacao_para": userLoged,
				//"relacao_de": email
				"userEmail": email
				}
			})
		.success(function(response) {
			/*$ionicPopup.alert({
				title: 'services',
				template: 'success'
			});*/
			$ionicLoading.hide();
		})
		.error(function(response) {
			/*$ionicPopup.alert({
				title: 'services',
				template: 'error'
			});*/
			$ionicLoading.hide();
		});
	}

	function recusarAmizade(userLoged, email){

		/*$ionicPopup.alert({
			title: 'services',
			template: 'recusarAmizade'
		});*/

		$http.post("http://172.17.0.13:3000/recusarAmizade",
			{ params: {
				"relacao_para": userLoged,
				//"relacao_de": email
				"userEmail": email
				}
			})
		.success(function(response) {
			/*$ionicPopup.alert({
				title: 'services',
				template: 'success'
			});*/
			$ionicLoading.hide();
		})
		.error(function(response) {
			/*$ionicPopup.alert({
				title: 'services',
				template: 'error'
			});*/
			$ionicLoading.hide();
		});
	}

	function cadastrarLivro(nome, autor, editora, ano){

		$http.post("http://172.17.0.13:3000/cadastrarLivro",
			{ params: {
				"livnome": nome,
				"livautor": autor,
				"liveditora": editora,
				"livano": ano}
			})
		.success(function(response) {
			$ionicLoading.hide();
		})
		.error(function(response) {
			$ionicLoading.hide();
		});
	}

	/*function buscarLivro(id){

		$http.post("http://172.17.0.13:3000/buscarLivro",
			{ params: {
						"id": id}
						//}
						})
			.success(function(response) {
					$ionicPopup.alert({
						title: 'Buscar',
						template: 'Livro: ' + response// + '; Ano: ' + response.livano//JSON.stringify(response.livnome)
                    });

					//dados = response;
                    $ionicLoading.hide();
            })
            .error(function(response) {

                   $ionicLoading.hide();

            });
			//return dados;
	}*/

  function login(email, password){

      $ionicLoading.show({
              template: 'Entrando...'
          });

      $http.post("http://172.17.0.13:3000/login",
             { params: {
                         "email": email,
                         "password": password}
                        })
               .success(function(response) {

                    $ionicLoading.hide();

              if ( response == "LOGIN_FAIL" ){
                    $ionicPopup.alert({
                     title: 'Login falhou',
                      template: 'E-mail e/ou senha incorretos.'
                    });
              }
             else{ // SUCCESS

                  window.localStorage['session'] = JSON.stringify(response);

									if (response.tipo == "livraria") {
										$state.transitionTo('menu_livrarias.livrarias_meus_livros');
									}
									else if (response.tipo == "admin") {
										$state.transitionTo('menu_admin.admin_livrarias');
									}
									else {//(response.tipo == "usuario") {
										//$state.transitionTo('menu.dash');
										$state.transitionTo('menu.livrando_linha_do_tempo');
									}

             }
            })
            .error(function(response) {

                   $ionicLoading.hide();

                   $ionicPopup.alert({
                       title: 'Login',
                       template: 'Serviço indisponível, certifique-se de que está on-line.'
                   });
            });
  }
	function enviarfoto(foto,email){



	    $http.post("http://172.17.0.13:3000/enviarfoto",
	      { params: {
	        "foto": foto,}

	      })
	    .success(function(response) {
	      //res_livro = JSON.stringify(response)

	      $ionicPopup.alert({
	        title: 'Alerta',
	        template: 'Sucesso.'
	      });
	      $ionicLoading.hide();
	    })
	    .error(function(response) {
	      $ionicLoading.hide();

	      $ionicPopup.alert({
	        title: 'Alerta',
	        template: 'Erro.'
	      });
	    });
	  }

  function logout(email){

        $ionicLoading.show({
              template: 'Saindo...'
          });

        $http.post("http://172.17.0.13:3000/logout",
             { params: { "email": email }})
               .success(function(response) {

                    $ionicLoading.hide();

              if ( response == "LOGIN_FAIL" ){
                    $ionicPopup.alert({
                     title: 'Logout Failed',
                      template: 'Oops something went wrong.'
                    });
              }
             else{ // SUCCESS

                  window.localStorage['session'] = "";
                  $state.transitionTo('login');
             }
            })
            .error(function(response) { // IF THERE IS AN ERROR LOGOUT ANYWAY

                   $ionicLoading.hide();

                  window.localStorage['session'] = "";
                  $state.transitionTo('login');
            });
  }

  function signUp(nome, email, password){

       $ionicLoading.show({
              template: 'Criando conta...'
          });

            $http.post("http://172.17.0.13:3000/signUp",
               { params: {
							 						 "username": nome,
                           "email": email,
                           "password": password }
                           })
                 .success(function(response) {

                      $ionicLoading.hide();

                if ( response == "USER_EXISTS" ){
                      $ionicPopup.alert({
                       title: 'Nome de usuário já utilizado',
                        template: 'Nome de usuário já utilizado, tente outro.'
                      });
                }
               else{ // SUCCESS

                    window.localStorage['session'] = JSON.stringify(response);
										$ionicPopup.alert({
	                       title: 'Token enviado',
	                       template: 'Enviamos um codigo de verificação para o seu endereço de e-mail. Insira-o no campo abaixo.' });
                    $state.transitionTo('validarEmail');
               }
              })
              .error(function(response) {
                     $ionicLoading.hide();

                     $ionicPopup.alert({
                         title: 'Conta',
                         template: 'Serviço indisponível, certifique-se de que está on-line.'
                     });
              });
  }
	function signUpFb(nome, email, id, foto){

			 $ionicLoading.show({
							template: 'Criando conta...'
					});

						$http.post("http://172.17.0.13:3000/signUpFb",
							 { params: {
													 "username": nome,
													 "email": email,
													 "id": id,
													  "foto": foto}
													 })
								 .success(function(response) {

											$ionicLoading.hide();

								if ( response == "USER_EXISTS" ){
											$ionicPopup.alert({
											 title: 'Nome de usuário já utilizado',
												template: 'Nome de usuário já utilizado, tente outro.'
											});

								}
							 else{ // SUCCESS

										window.localStorage['session'] = JSON.stringify(response);
										$state.transitionTo('menu.livrando_linha_do_tempo');
							 }
							})
							.error(function(response) {
										 $ionicLoading.hide();

										 $ionicPopup.alert({
												 title: 'Conta',
												 template: 'Serviço indisponível, certifique-se de que está on-line.'
										 });
							});
	}

	function irParaConversa(pessoa){

















		/*$ionicPopup.alert({
				title: 'irParaConversa service',
				template: pessoa
		});*/
		$rootScope.rootScopeP = pessoa;
		//$rootScope.$broadcast('irParaConversa', pessoa);
		$state.transitionTo('menu.livrando_conversas_mensagens');



	}

	function getPessoa(){


		/*$ionicPopup.alert({
				title: 'getPessoa service',
				template: $rootScope.rootScopeP
		});*/
		return $rootScope.rootScopeP;
	}
	function adicionarAmigo(donoEmail){


		$rootScope.rootScopeDonoEmail = donoEmail;
		$state.transitionTo('menu.livrando_meus_amigos_adicionar_clicado');
	}
	function getDonoEmail(){
		return $rootScope.rootScopeDonoEmail;
	}
	//irParaConversa.$inject = ['$scope', 'IonicLogin'];
  return {

    login: login,
    signUp: signUp,
		signUpFb: signUpFb,
    logout: logout,
		irParaConversa: irParaConversa,
		getPessoa: getPessoa,
		adicionarAmigo: adicionarAmigo,
		getDonoEmail: getDonoEmail,
	teste: teste,
	cadastrarLivro: cadastrarLivro,
	adicionarPessoa: adicionarPessoa,
	aceitarAmizade: aceitarAmizade,
	enviarfoto: enviarfoto,
	recusarAmizade: recusarAmizade//,
	//buscarLivro: buscarLivro
  };
});
