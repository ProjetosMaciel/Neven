angular.module('starter.controllers', ['firebase','ngOpenFB', 'ionic-ratings'])


.controller('LivrariasCtrl', function($scope, IonicLogin, $ionicPopup, $http, $ionicLoading, $state, $rootScope) {

	$scope.$on('$ionicView.enter', function(e) {
		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		$scope.data = {} ;
	});

	$scope.buscarLivrarias = function(){

		$http.post("http://172.17.0.13:3000/buscarLivrarias",
			{ params: {
						}
						})
			.success(function(response) {
							$scope.amigos = response;
							$ionicLoading.hide();
			})
			.error(function(response) {
					$ionicLoading.hide();
						});
	}

	$scope.abrirLivraria = function(email){

		$ionicPopup.confirm({
			title: 'Confirmação',
			content: 'Deseja abrir o site da livraria?',
			cancelText: 'Não',
			okText: 'Sim'
		}).then(function(res) {
			if(res) {
				$http.post("http://172.17.0.13:3000/abrirLivraria",
					{ params: {
						"email": email
						}
					})
				.success(function(response) {
					// isso é provisório
					$scope.livraria = response;
					if ($scope.livraria.email == "saraiva@saraiva.com.br") {
						// abrir site
						//window.open = cordova.InAppBrowser.open('www.google.com.br', '_blank', 'location=yes');
						var ref = cordova.InAppBrowser.open('https://www.saraiva.com.br/', '_system', 'location=yes');
						$ionicLoading.hide();
					}
					else if ($scope.livraria.email == "nobel@nobel.com.br") {
						var ref = cordova.InAppBrowser.open('http://livrarianobel.com.br/', '_system', 'location=yes');
						$ionicLoading.hide();
					}
				})
				.error(function(response) {
					$ionicLoading.hide();
				});
			}
		});
	}

})

.controller('MeusAmigosCtrl', function($scope, IonicLogin, $ionicPopup, $http, $ionicLoading, $state, $rootScope,$timeout,$ionicModal) {

	$scope.$on('$ionicView.enter', function(e) {
		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		$scope.data = {} ;
	});

	$scope.buscarAmigo = function(){
		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information

		$http.post("http://172.17.0.13:3000/buscarAmigo",
			{ params: {
						//"relacao_de": $scope.session.email
						"userEmail": $scope.session.email
						}
						})
			.success(function(response) {
				/*$ionicPopup.alert({
						title: 'Controller',
						template: 'Livro: ' + response// + '; Token: ' + token//JSON.stringify(response.livnome)
          });*/

										$scope.amigos = response;
                    $ionicLoading.hide();
            })
            .error(function(response) {
					$ionicLoading.hide();
            });
	}
/*
	//############# Rating do pra ler ##############################
	$scope.buscarmediaavaliacao = function(){

		$http.post("http://172.17.0.13:3000/buscarmedia",
			 { params: {
			 "amigoEmail": $rootScope.rootScopeEmailAmigo,
			 "userLogged": $scope.session.email
		 }

	 }).success(function(response){
//Euestavaaqui

$scope.teste = response;
$ionicPopup.alert({
	title: 'Alerta teste',
	template: 'Qual sera'+$scope.teste
});


 if ( $scope.teste == 0) {

	 $ionicPopup.alert({
	 	title: 'Alerta teste',
	 	template: 'Qual sera'+$scope.teste
	 });
	$scope.ratingsObject2 = {


				iconOn: 'ion-ios-star',    //Optional
				iconOff: 'ion-ios-star-outline',   //Optional
				iconOnColor: 'rgb(200, 200, 100)',  //Optional
				iconOffColor:  'rgb(200, 100, 100)',    //Optional
				rating: 0 , //Optional
				minRating: 0,    //Optional
				readOnly: true, //Optional

				callback: function(rating, index) {    //Mandatory
					$scope.ratingsCallback(rating, index);
				}
			};

			$scope.ratingsCallback = function(rating, index) {

				console.log('Selected rating is : ', rating, ' and the index is : ', index);
			};
		}

else if  ( $scope.teste == 1) {
	$ionicPopup.alert({
	 title: 'Alerta teste',
	 template: 'Qual sera'+$scope.teste
	});
	$scope.ratingsObject2 = {


				iconOn: 'ion-ios-star',    //Optional
				iconOff: 'ion-ios-star-outline',   //Optional
				iconOnColor: 'rgb(200, 200, 100)',  //Optional
				iconOffColor:  'rgb(200, 100, 100)',    //Optional
				rating: 1 , //Optional
				minRating: 0,    //Optional
				readOnly: true, //Optional

				callback: function(rating, index) {    //Mandatory
					$scope.ratingsCallback(rating, index);
				}
			};

			$scope.ratingsCallback = function(rating, index) {

				console.log('Selected rating is : ', rating, ' and the index is : ', index);
			};
		}

else if  ( response == "2") {
	$scope.ratingsObject2 = {


				iconOn: 'ion-ios-star',    //Optional
				iconOff: 'ion-ios-star-outline',   //Optional
				iconOnColor: 'rgb(200, 200, 100)',  //Optional
				iconOffColor:  'rgb(200, 100, 100)',    //Optional
				rating: 2, //Optional
				minRating: 0,    //Optional
				readOnly: true, //Optional

				callback: function(rating, index) {    //Mandatory
					$scope.ratingsCallback(rating, index);
				}
			};

			$scope.ratingsCallback = function(rating, index) {

				console.log('Selected rating is : ', rating, ' and the index is : ', index);
			};
		}

else if  ( response == "3") {
	$scope.ratingsObject2 = {


				iconOn: 'ion-ios-star',    //Optional
				iconOff: 'ion-ios-star-outline',   //Optional
				iconOnColor: 'rgb(200, 200, 100)',  //Optional
				iconOffColor:  'rgb(200, 100, 100)',    //Optional
				rating: 3, //Optional
				minRating: 0,    //Optional
				readOnly: true, //Optional

				callback: function(rating, index) {    //Mandatory
					$scope.ratingsCallback(rating, index);
				}
			};

			$scope.ratingsCallback = function(rating, index) {

				console.log('Selected rating is : ', rating, ' and the index is : ', index);
			};
		}

else if  ( response == "4") {
	$scope.ratingsObject2 = {


				iconOn: 'ion-ios-star',    //Optional
				iconOff: 'ion-ios-star-outline',   //Optional
				iconOnColor: 'rgb(200, 200, 100)',  //Optional
				iconOffColor:  'rgb(200, 100, 100)',    //Optional
				rating: 4 , //Optional
				minRating: 0,    //Optional
				readOnly: true, //Optional

				callback: function(rating, index) {    //Mandatory
					$scope.ratingsCallback(rating, index);
				}
			};

			$scope.ratingsCallback = function(rating, index) {

				console.log('Selected rating is : ', rating, ' and the index is : ', index);
			};
		}

else if  ( response == "5") {
	$scope.ratingsObject2 = {


				iconOn: 'ion-ios-star',    //Optional
				iconOff: 'ion-ios-star-outline',   //Optional
				iconOnColor: 'rgb(200, 200, 100)',  //Optional
				iconOffColor:  'rgb(200, 100, 100)',    //Optional
				rating: 5 , //Optional
				minRating: 0,    //Optional
				readOnly: true, //Optional

				callback: function(rating, index) {    //Mandatory
					$scope.ratingsCallback(rating, index);
				}
			};

			$scope.ratingsCallback = function(rating, index) {

				console.log('Selected rating is : ', rating, ' and the index is : ', index);
			};
		}
	});
}*/

		//########################Fim#######################*/
	$scope.buscarPessoaSolicitacaoAmizade = function(){
		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		$http.post("http://172.17.0.13:3000/buscarPessoaSolicitacaoAmizade",
			{ params: {
						"relacao_para": $scope.session.email
						}
						})
			.success(function(response) {
										$scope.pessoas = response;
                    $ionicLoading.hide();
            })
            .error(function(response) {
					$ionicLoading.hide();
				});
	}
//euaki
	$scope.abrirPessoa = function(nomeAmigo, emailAmigo){
		$rootScope.rootScopeNomeAmigo = nomeAmigo;
		$rootScope.rootScopeEmailAmigo = emailAmigo;
		$state.go('menu.livrando_meus_amigos_amigo');
	}

	$scope.notificacoes = function(){
		$state.go('menu.livrando_meus_amigos_notificacoes');
	}

	$scope.mostrarNotificacao = function(email){
		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		$ionicPopup.confirm({
			title: 'Confirmação',
			content: 'Você aceita a solicitação de amizade?',
			cancelText: 'Recusar',
			okText: 'Aceitar'
		}).then(function(res) {
			if(res) {
				//cadastrar valor 2 no bd
				//IonicLogin.aceitarAmizade($scope.session.email, email);
				$http.post("http://172.17.0.13:3000/aceitarAmizade",
					{ params: {
						"relacao_para": $scope.session.email,
						"userEmail": email
						}
					})
				.success(function(response) {
					if (response == "SUCCESS") {
						$ionicPopup.alert({
							title: 'Parabéns',
							template: 'Agora vocês são amigos!'
						}).then(function(res) {
							$ionicLoading.hide();
							$scope.buscarAmigo();
							$state.go('menu.livrando_meus_amigos');
						});
					}
				})
				.error(function(response) {
					$ionicLoading.hide();
				});
			} else {
				//cadastrar valor 0 no bd
				//IonicLogin.recusarAmizade($scope.session.email, email);
				$http.post("http://172.17.0.13:3000/recusarAmizade",
					{ params: {
						"relacao_para": $scope.session.email,
						"userEmail": email
						}
					})
				.success(function(response) {
					$ionicLoading.hide();
				})
				.error(function(response) {
					$ionicLoading.hide();
				});
			}
		});
	}
	$scope.buscarLivrosAmigo = function(emailAmigo){
		$http.post("http://172.17.0.13:3000/buscarLivrosAmigo",
			{ params: {
								"userEmail": emailAmigo
							}
						})
						.success(function(response) {
										$scope.livros = response;
										$ionicLoading.hide();
						})
						.error(function(response) {
										$ionicLoading.hide();
						});
	}
	$scope.buscarAmigosDoAmigo = function(emailAmigo){
		$http.post("http://172.17.0.13:3000/buscarAmigosDoAmigo",
			{ params: {
								"emailAmigo": emailAmigo,
								"userLogged":  $scope.session.email
							}
						})
						.success(function(response) {
										$scope.amigos = response;
										$ionicLoading.hide();
						})
						.error(function(response) {
										$ionicLoading.hide();
						});
	}

	// teste da avaliação

	/*$scope.ratingsObject1 = {

        iconOn: 'ion-ios-star',    //Optional
        iconOff: 'ion-ios-star-outline',   //Optional
        iconOnColor: 'rgb(200, 200, 100)',  //Optional
        iconOffColor:  'rgb(200, 100, 100)',    //Optional
        rating:  0, //Optional
        minRating:0,    //Optional
        readOnly: false, //Optional

        callback: function(rating, index) {    //Mandatory
          $scope.ratingsCallback(rating, index);
        }
      };

      $scope.ratingsCallback = function(rating, index) {
				$ionicPopup.alert({
					title: 'Alerta avalicao',
					template: 'entro no post'
				});
				$http.post("http://172.17.0.13:3000/avaliacaoDoAmigo",
						{ params: {
						"amigoEmail": $rootScope.rootScopeEmailAmigo,
							"avaliacao": rating,
							"userLogged": $scope.session.email
						 }
					 })

        console.log('Selected rating is : ', rating, ' and the index is : ', index);
      };/*/
//############# Rating do pra ler ##############################
$scope.buscarmediaavaliacao = function(){




			//########################Fim#######################*/

}
	//########################Fim#######################/*/
	$scope.abrirLivroAmigo = function(idLivro) {
		$rootScope.rootScopeIdLivro = idLivro;
		$state.go('menu.livrando_meus_amigos_amigo_livros_clicado');
	}
	$scope.buscarLivroClicado = function(idLivro, idLivroUXL) {
		$http.post("http://172.17.0.13:3000/buscarLivroClicado",
			{ params: {
						"id": idLivro,
						"idLivroUXL": idLivroUXL
						}
						})
			.success(function(response) {
										$scope.livroClicado = response;
										$scope.tipo = $scope.livroClicado.tipo;
										if ($scope.livroClicado.status == "doacao") {
											$scope.status = "doação";
										}
										else if ($scope.livroClicado.status == "emprestimo") {
											$scope.status = "empréstimo";
										}
										else if ($scope.livroClicado.status == "troca") {
											$scope.status = "troca";
										}
										else if ($scope.livroClicado.status == "venda") {
											$scope.status = "venda";
										}
										$ionicLoading.hide();
            })
            .error(function(response) {
                   $ionicLoading.hide();
            });
	}
	$scope.irParaConversa = function(id, dono, donoEmail, idLivro) {

		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		$http.post("http://172.17.0.13:3000/irParaConversa",
			{ params: {
						"id": id,
						"userLogged": $scope.session.email,
						"donoEmail": donoEmail,
						"idLivro": idLivro
						}
						})
			.success(function(response) {
							if (response == "NOT_FOUND") {
								$ionicPopup.alert({
									title: 'Sucesso',
									template: 'Solicitação enviada com sucesso!'
								}).then(function(res) {
									IonicLogin.irParaConversa(dono);
									$ionicLoading.hide();
								});
							}
							else if (response == "FOUND") {
								$ionicPopup.alert({
									title: 'Alerta',
									template: 'Você já demostrou interesse nesse livro!'
								});
								$ionicLoading.hide();
							}
						})
			.error(function(response) {
									 $ionicLoading.hide();
						});
	}
	$scope.adicionarAmigo = function() {
		$state.go('menu.livrando_meus_amigos_adicionar');
	}
	$scope.buscarPessoa = function(textoBusca){
		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		if (textoBusca) {
		$http.post("http://172.17.0.13:3000/buscarPessoa",
			{ params: {
						"textoBusca": textoBusca,
						"userLoged": $scope.session.email}
						})
			.success(function(response) {
										$scope.pessoas = response;
                    $ionicLoading.hide();
            })
      .error(function(response) {
                   $ionicLoading.hide();
            });
		}
		else {
			$ionicPopup.alert({
				title: 'Alerta',
				template: 'Preencha o campo de pesquisa antes'
			});
		}
	}
	$scope.abrirPessoaClicada = function(emailPessoa){
		$rootScope.rootScopeEmailPessoa = emailPessoa;
		$state.go('menu.livrando_meus_amigos_adicionar_clicado');
	}
	$scope.zerarRootScopeEmailPessoa = function(){
		$rootScope.rootScopeEmailPessoa = '';
	}
	$scope.getDonoEmail = function(){
		if (!$rootScope.rootScopeEmailPessoa) {
			$rootScope.rootScopeEmailPessoa = IonicLogin.getDonoEmail();
			$state.go('menu.livrando_meus_amigos_adicionar_clicado');
		}
	}
	$scope.buscarPessoaClicada = function(email){
		$http.post("http://172.17.0.13:3000/buscarPessoaClicada",
			{ params: {
						"email": email}
						})
			.success(function(response) {
										$scope.pessoas = response;
                    $ionicLoading.hide();
            })
            .error(function(response) {
                   $ionicLoading.hide();
            });
	}
	$scope.adicionarPessoa = function(){
		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		$http.post("http://172.17.0.13:3000/adicionarPessoa",
			{ params: {
				"userEmail": $scope.session.email,
				"relacao_para": $rootScope.rootScopeEmailPessoa
				}
			})
		.success(function(response) {
			if ( response == "EXISTING_FRIENDSHIP" ){
						$ionicPopup.alert({
						 	title: 'Alerta',
							template: 'Essa pessoa já é sua amiga ou já existe uma solicitação!'
						});
			}
			else if ( response == "SUCCESS" ) {
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
	$scope.removerPessoa = function(){
		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information

		$ionicPopup.confirm({
			title: 'Confirmação',
			content: 'Deseja realmente desfazer a amizade?',
			cancelText: 'No',
			okText: 'Sim'
		}).then(function(res) {
			if(res) {
				$http.post("http://172.17.0.13:3000/removerPessoa",
					{ params: {
						"userEmail": $scope.session.email,
						"relacao_para": $rootScope.rootScopeEmailAmigo
						}
					})
				.success(function(response) {
					if ( response == "SUCCESS" ){
								$ionicLoading.hide();
								$state.go('menu.livrando_meus_amigos');
					}
					else if (response == "ERROR") {
						$ionicPopup.alert({
							title: 'Erro',
							template: 'Algo deu errado'
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
			} else {
				$ionicLoading.hide();
			}
		});

	}
//**************** Teste Tiemout*******************
//10 seconds delay
        $timeout( function(){
            $scope.test1 = "<ionic-ratings ratingsobj='ratingsObject' index='0'></ionic-ratings>";
        }, 4000 );

        //time
        $scope.time = 0;

        //timer callback
        var timer = function() {
            if( $scope.time < 10000 ) {
                $scope.time += 1000;
                $timeout(timer, 1000);
            }
        }

        //run!!
        $timeout(timer, 1000);

//***********************

	$scope.buscarAmigoInformacoes = function(emailAmigo) {



	 		$http.post("http://172.17.0.13:3000/buscarAmigoInformacoes",
	 			{ params: {
	 						//"relacao_de": $scope.session.email
	 						"amigoEmail": emailAmigo
	 						}
	 						})
	 			.success(function(response) {
	 				/*$ionicPopup.alert({
	 						title: 'Controller',
	 						template: 'Livro: ' + response// + '; Token: ' + token//JSON.stringify(response.livnome)
	           });*/

	 										$scope.amigos = response;
	                     $ionicLoading.hide();
	             })
	             .error(function(response) {
	 					$ionicLoading.hide();
	             });
//akitbm
							 $http.post("http://172.17.0.13:3000/buscarAvaliacao",
							 	 { params: {
							 	 "amigoEmail": $rootScope.rootScopeEmailAmigo,
							 	 "userLogged": $scope.session.email
							  }
							 }).success(function(response){

							 	$scope.kkk = response;
							 	if (response) {
							 		$rootScope.rootScopeStars = parseInt($scope.kkk.avaliacao);

							 	}
							});
          var j= $rootScope.rootScopeStars;
							$scope.ratingsObject = {


											iconOn: 'ion-ios-star',    //Optional
											iconOff: 'ion-ios-star-outline',   //Optional
											iconOnColor: 'rgb(200, 200, 100)',  //Optional
											iconOffColor:  'rgb(0, 0, 0)',    //Optional
									//   rating: 2,
										rating: j, //Optional
											minRating: 0,    //Optional
											readOnly: false, //Optional

											callback: function(rating, index) {    //Mandatory
												$scope.ratingsCallback(rating, index);
											}

									};

									$scope.ratingsCallback = function(rating, index) {
										$http.post("http://172.17.0.13:3000/avaliacaoDoAmigo",
												{ params: {
												"amigoEmail": $rootScope.rootScopeEmailAmigo,
													"avaliacao": rating,
													"userLogged": $scope.session.email
												 }
											 })
										console.log('Selected rating is : ', rating, ' and the index is : ', index);
									};

                  //***********Teste popup************

									//**************


							$http.post("http://172.17.0.13:3000/buscarmedia",
								{ params: {
								"amigoEmail": $rootScope.rootScopeEmailAmigo,
								"userLogged": $scope.session.email
							 }
							}).success(function(response){
								if (response) {
									$scope.reputacao = response;
								}
						 });

        var a = "<ionic-ratings ratingsobj='ratingsObject' index='0'></ionic-ratings>";
				document.getElementById('mostrar').innerHTML= a;


			}
})
.controller('ProcurandoLivrosCtrl', function($scope, IonicLogin, $ionicPopup, $http, $ionicLoading, $state, $rootScope) {

	$scope.$on('$ionicView.enter', function(e) {
		$scope.data = {} ;
	});

	$scope.buscarLivro = function(textoBusca, selecao){
		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		if (!textoBusca) {
			$ionicPopup.alert({
				title: 'Alerta',
				template: 'Preencha o campo de pesquisa antes'
			});
		}
		else {
			$http.post("http://172.17.0.13:3000/buscarLivro",
				{ params: {
							"textoBusca": textoBusca,
							"selecao": selecao,
							"userLoged": $scope.session.email}
							})
				.success(function(response) {
											$scope.livros = response;
	                    $ionicLoading.hide();
	            })
	            .error(function(response) {
	                   $ionicLoading.hide();
	            });
		}
	}

	$scope.abrirLivro = function(idLivro, idLivroUXL){
		$rootScope.rootScopeIdLivro = idLivro;
		$rootScope.rootScopeIdLivroUXL = idLivroUXL;
		$state.go('menu.livrando_procurar_livros_livro');
	}

	$scope.buscarLivroClicado = function(idLivro, idLivroUXL){
		$http.post("http://172.17.0.13:3000/buscarLivroClicado",
			{ params: {
						"id": idLivro,
						"idUXL": idLivroUXL
						}
						})
			.success(function(response) {
										$scope.livroClicado = response;
										$scope.tipo = $scope.livroClicado.tipo;
										if ($scope.livroClicado.status == "doacao") {
											$scope.status2 = "Doação";
											$scope.mais1 = "Mais";
											$scope.mais2 = "-";
											$scope.mais3 = "";
										}
										else if ($scope.livroClicado.status == "emprestimo") {
											$scope.status2 = "Empréstimo";
											$scope.mais1 = "Mais";
											$scope.mais2 = "-";
											$scope.mais3 = "";
										}
										else if ($scope.livroClicado.status == "troca") {
											$scope.status2 = "Troca";
											$scope.mais1 = "Descrição troca";
											$scope.mais2 = "";
											$scope.mais3 = "";
										}
										else if ($scope.livroClicado.status == "venda") {
											$scope.status2 = "Venda";
											$scope.mais1 = "Valor";
											$scope.mais2 = "R$ ";
											$scope.mais3 = "";
										}
										else if ($scope.livroClicado.status == "livrarias") {
											$scope.status2 = "Livraria";
											$scope.mais1 = "Mais";
											$scope.mais2 = "-";
											$scope.mais3 = "-";
										}
										$ionicLoading.hide();
            })
            .error(function(response) {
                   $ionicLoading.hide();
            });
	}
	$scope.adquirirLivro = function(id, idLivro){
		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		$http.post("http://172.17.0.13:3000/adquirirLivro",
			{ params: {
						"userLoged": $scope.session.email,
						"id": id,
						"livroId": idLivro}
						})
			.success(function() {
										$ionicLoading.hide();
            })
      .error(function() {
                   $ionicLoading.hide();
            });
	}
	$scope.adicionarDesejados = function(idLivro){
		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		$http.post("http://172.17.0.13:3000/adicionarDesejados",
			{ params: {
							"userLoged": $scope.session.email,
							"livroId": idLivro}
						})
						.success(function(response) {
							if (response == "ADD_SUCCESS")
							{
								$rootScope.rootScopeHeartStatus = "desejado";
								//$scope.verificarDesejado(idLivro);
								$ionicLoading.hide();
							}
							else if (response == "REMOVE_SUCCESS") {
								$rootScope.rootScopeHeartStatus = "nao_desejado";
								//$scope.verificarDesejado(idLivro);
								$ionicLoading.hide();
							}
            })
            .error(function(response) {
                   $ionicLoading.hide();
            });
	}
	$scope.irParaConversa = function(id, dono, donoEmail, tipo, idLivro) {
		if (tipo == "livraria") {
			//abrir site no navegador
			//var ref = cordova.InAppBrowser.open('https://www.saraiva.com.br/', '_system', 'location=yes');
		}
		else if (tipo == "usuario") {
			$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
			$http.post("http://172.17.0.13:3000/verificarAmizade",
				{ params: {
					"userLogged": $scope.session.email,
					"pessoa": donoEmail
					}
				})
				.success(function(response) {
					if (response == 'IS_FRIEND') {
						$ionicPopup.confirm({
							title: 'Confirmação',
							content: 'Você realmente quer esse livro?',
							cancelText: 'Não',
							okText: 'Sim'
						}).then(function(res) {
							if(res) {
								$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
								$http.post("http://172.17.0.13:3000/irParaConversa",
									{ params: {
												"id": id,
												"userLogged": $scope.session.email,
												"donoEmail": donoEmail,
												"idLivro": idLivro
												}
												})
									.success(function(response) {
										if (response == "NOT_FOUND") {
											$ionicPopup.confirm({
												title: 'Sucesso',
												template: 'Você mostrou interesse no livro de ' + dono + '! Deseja conversar com ele agora?',
												cancelText: 'Não',
												okText: 'Sim'
											}).then(function(res) {
												if(res) {
													IonicLogin.irParaConversa(dono);
													$ionicLoading.hide();
												}
											});
										}
													else if (response == "FOUND") {
														$ionicPopup.alert({
															title: 'Alerta',
															template: 'Você já demostrou interesse nesse livro!'
														});
														$ionicLoading.hide();
													}
												})
									.error(function(response) {
															 $ionicLoading.hide();
												});
							}
						});
					}
					else if (response == 'IS_NOT_FRIEND') {
						$ionicPopup.confirm({
							title: 'Alerta',
							content: dono + ' não é seu amigo. Deseja lhe enviar uma solicitação?',
							cancelText: 'Não',
							okText: 'Sim'
						}).then(function(res) {
							if(res) {
								IonicLogin.adicionarAmigo(donoEmail);
							}
						});
					}
					$ionicLoading.hide();
	            })
	      .error(function(response) {
	                   $ionicLoading.hide();
	            });
		}
	}
	$scope.verificarDesejado = function(idLivro) {
		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		//$scope.heartStatus = "";
		/*$ionicPopup.alert({
			title: 'idLivro, userLogged',
			template: idLivro + ", " + $scope.session.email
		});*/
		$http.post("http://172.17.0.13:3000/verificarDesejado",
			{ params: {
						"idLivro": idLivro,
						"userLogged": $scope.session.email
						}
						})
			.success(function(response) {
									if (response == "DESEJADO") {
										/*$ionicPopup.alert({
											title: 'response',
											template: "desejado"
										});*/
										$rootScope.rootScopeHeartStatus = "desejado";
									}
									else if (response == "NAO_DESEJADO") {
										/*$ionicPopup.alert({
											title: 'response',
											template: "nao desejado"
										});*/
										$rootScope.rootScopeHeartStatus = "nao_desejado";
									}
									$ionicLoading.hide();
            })
      .error(function(response) {
                   $ionicLoading.hide();
            });
	}
})
.controller('ProcurandoPessoasCtrl', function($scope, IonicLogin, $ionicPopup, $http, $ionicLoading, $state, $rootScope) {

	$scope.$on('$ionicView.enter', function(e) {
		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		$scope.data = {} ;
	});

	$scope.buscarPessoa = function(textoBusca){
		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		if (textoBusca) {
		$http.post("http://172.17.0.13:3000/buscarPessoa",
			{ params: {
						"textoBusca": textoBusca,
						"userLoged": $scope.session.email}
						})
			.success(function(response) {
					$scope.pessoas = response;
                    $ionicLoading.hide();
            })
            .error(function(response) {
                   $ionicLoading.hide();
            });
		}
		else {
			$ionicPopup.alert({
				title: 'Alerta',
				template: 'Preencha o campo de pesquisa antes'
			});
		}
	}

	$scope.abrirPessoaClicada = function(emailPessoa){
		$rootScope.rootScopeEmailPessoa = emailPessoa;
		$state.go('menu.livrando_procurar_pessoas_pessoa');
	}

	$scope.adicionarPessoa = function(){
		//IonicLogin.adicionarPessoa($scope.session.email, $rootScope.rootScopeEmailPessoa);
		$http.post("http://172.17.0.13:3000/adicionarPessoa",
			{ params: {
				//"relacao_de": userLoged,
				"userEmail": $scope.session.email,
				"relacao_para": $rootScope.rootScopeEmailPessoa
				}
			})
		.success(function(response) {
			if ( response == "EXISTING_FRIENDSHIP" ){
						$ionicPopup.alert({
						 	title: 'Alerta',
							template: 'Essa pessoa já é sua amiga'
						});
			}
			else if ( response == "SUCCESS" ) {
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
	$scope.buscarPessoaClicada = function(email){
		$http.post("http://172.17.0.13:3000/buscarPessoaClicada",
			{ params: {
						"email": email}
						})
			.success(function(response) {
										$scope.pessoas = response;
                    $ionicLoading.hide();
            })
            .error(function(response) {
                   $ionicLoading.hide();
            });
	}
})
.controller('MeusLivrosCtrl', function($scope, IonicLogin, $ionicPopup, $http, $ionicLoading, $state, $rootScope) {

	$scope.$on('$ionicView.enter', function(e) {
		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		$scope.data = {} ;
		$scope.data.id = $rootScope.id;
	});

	$scope.buscarMeusLivros = function(){
		$rootScope.rootScopeValorLivro = "";
		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		$http.post("http://172.17.0.13:3000/buscarMeusLivros",
			{ params: {
						"email": $scope.session.email
						}
						})
			.success(function(response) {
										$scope.livros = response;
                    $ionicLoading.hide();
            })
            .error(function(response) {

                   $ionicLoading.hide();

            });
	}

	$scope.irParaCadastrarLivro = function(){
		$state.go('tab.livrando_meus_livros_cadastrar');
	}
	$scope.cadastrarLivro = function(){
		IonicLogin.cadastrarLivro($scope.data.nome, $scope.data.autor, $scope.data.editora, $scope.data.ano);
	}
	$scope.adicionarLivro = function(){
		$state.go('menu.livrando_meus_livros_adicionar');
	}
	$scope.pesquisarLivro = function(textoBusca, selecao){
		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		if (!textoBusca) {
			$ionicPopup.alert({
				title: 'Alerta',
				template: 'Preencha o campo de pesquisa antes'
			});
		}
		else {
			$http.post("http://172.17.0.13:3000/pesquisarLivro",
				{ params: {
							"textoBusca": textoBusca,
							"selecao": selecao,
							"email": $scope.session.email}
							})
				.success(function(response) {
											$scope.livros = response;
			                $ionicLoading.hide();
			        })
			        .error(function(response) {
			               $ionicLoading.hide();
			        });
		}
	}
	$scope.meuLivroClicado = function(id, UXLId){
		$rootScope.rootScopeIdLivroClicado = id;
		$rootScope.rootScopeUXLIdLivroClicado = UXLId;
		$state.go('menu.livrando_meus_livros_clicado');
	}
	$scope.adicionarLivroClicado = function(id){
		$rootScope.rootScopeIdLivroClicado = id;
		$state.go('menu.livrando_meus_livros_adicionar_clicado');
	}
	$scope.buscarMeuLivroClicado = function(){
		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		$http.post("http://172.17.0.13:3000/buscarMeuLivroClicado",
			{ params: {
						"livroId": $rootScope.rootScopeIdLivroClicado,
						"UXLId": $rootScope.rootScopeUXLIdLivroClicado,
						"email": $scope.session.email}
						})
			.success(function(response) {
										$scope.livroClicado = response;
										var user = $scope.livroClicado.userEmprestado;
										if ($scope.livroClicado.status == "doacao") {
											$scope.status = "Lista de doação";
											$scope.mais1 = "-";
											$scope.mais2= "Mais";
										}
										else if ($scope.livroClicado.status == "emprestimo") {
											$scope.status = "Lista de empréstimo";
											$scope.mais1 = "-";
												$scope.mais2= "Mais";
										}
										else if ($scope.livroClicado.status == "troca") {
											$scope.status = "Lista de troca";
											$scope.mais1 = "";
												$scope.mais2= "Descrição";

										}
										else if ($scope.livroClicado.status == "venda") {
											$scope.status = "Lista de venda";
											$scope.mais1 = "R$ ";
												$scope.mais2= "Valor";
										}
										else if ($scope.livroClicado.status == "disponivel") {
											$scope.status = "Disponível";
											$scope.mais1 = "-";
												$scope.mais2= "Mais";
										}
										else if ($scope.livroClicado.status == "emprestado" && $scope.livroClicado.userEmail == $scope.session.email && $scope.livroClicado.userDono == $scope.session.email) {
											$scope.status = "Emprestado para";
											$scope.mais1= "-";
												$scope.mais2= "Mais";
											$scope.userEmprestado = $scope.livroClicado.userEmprestado;
										}
										else if ($scope.livroClicado.status == "emprestado" && $scope.livroClicado.userEmail == $scope.session.email && $scope.livroClicado.userDono != $scope.session.email) {
											$scope.status = "Emprestado de";
											$scope.mais1 = "-";
												$scope.mais2= "Mais";
											$scope.userEmprestado = $scope.livroClicado.userEmprestado;
										}
										$ionicLoading.hide();
						})
						.error(function(response) {
									 $ionicLoading.hide();
						});
	}
	$scope.buscarLivroAdicionarClicado = function(){
		$http.post("http://172.17.0.13:3000/buscarLivroAdicionarClicado",
			{ params: {
						"id": $rootScope.rootScopeIdLivroClicado
						}
						})
			.success(function(response) {
										$scope.livroClicado = response;
										$ionicLoading.hide();
            })
            .error(function(response) {
                   $ionicLoading.hide();
            });
	}
	$scope.adicionarLivroAoPerfil = function(idLivro){
		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		$http.post("http://172.17.0.13:3000/adicionarLivroAoPerfil",
			{ params: {
						"id": idLivro,
						"email": $scope.session.email}
						})
			.success(function(response) {
							if (response == "ADD_SUCCESS") {
								$ionicPopup.alert({
								 title: 'Sucesso',
								 template: 'Livro adicionado com sucesso!'
							 }).then(function(res) {
								 $ionicLoading.hide();
								 $state.go('menu.livrando_meus_livros_adicionar');
							 });
							}
							else if (response == "EXIST") {
								$ionicPopup.alert({
								 title: 'Alert',
								 template: 'Esse livro já está na sua lista!'
							 });
							}
							else {
								$ionicPopup.alert({
								 title: 'Ouch',
								 template: 'Ocorreu algum erro.'
							 });
							}
						})
			.error(function(response) {
						 	$ionicLoading.hide();
						});
	}
	$scope.removerLivro = function(idLivro, status, userEmprestado){
		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		if (status == "Lista de doação" || status == "Lista de empréstimo" || status == "Lista de troca" || status == "Lista de venda") {
			$ionicPopup.confirm({
				title: 'Confirmação',
				content: 'Deseja remover esse livro da ' + status + '?',
				cancelText: 'Não',
				okText: 'Sim'
			}).then(function(res) {
				if(res) {
					$http.post("http://172.17.0.13:3000/voltarLivroParaDisponivel",
						{ params: {
									"id": idLivro,
									"userLoged": $scope.session.email}
									})
						.success(function(response) {
										if (response == "SUCCESS") {
											$ionicPopup.alert({
											 title: 'Sucesso',
											 template: 'Agora o livro está com o status disponível novamente!'
										 }).then(function(res) {
										 	$state.go("menu.livrando_meus_livros");
										 });
										}
										else {
											$ionicPopup.alert({
											 title: 'Ouch',
											 template: 'Ocorreu algum erro.'
										 });
										}
										$ionicLoading.hide();
									})
						.error(function(response) {
									 	$ionicLoading.hide();
									});
				}
			});
		}
		else if (status == "Emprestado para") {
			$ionicPopup.confirm({
				title: 'Confirmação',
				content: 'Deseja pegar seu livro de volta?',
				cancelText: 'Não',
				okText: 'Sim'
			}).then(function(res) {
				if(res) {
					$http.post("http://172.17.0.13:3000/voltarLivroParaDono",
						{ params: {
									"id": idLivro,
									"userLoged": $scope.session.email}
									})
						.success(function(response) {
										if (response == "SUCCESS") {
											$ionicPopup.alert({
											 title: 'Sucesso',
											 template: 'Agora seu livro foi devolvido!'
										 }).then(function(res) {
											$state.go("menu.livrando_meus_livros");
										 });
										}
										else {
											$ionicPopup.alert({
											 title: 'Ouch',
											 template: 'Ocorreu algum erro.'
										 });
										}
										$ionicLoading.hide();
									})
						.error(function(response) {
										$ionicLoading.hide();
									});
				}
			});
		}
		else if (status == "Emprestado de") {
			/*$ionicPopup.alert({
			 title: 'Alerta',
			 template: 'Esse livro está emprestado por ' + userEmprestado
		 });*/
			/*$ionicPopup.confirm({
				title: 'Confirmação',
				content: 'Deseja devolver esse livro?',
				cancelText: 'Não',
				okText: 'Sim'
			}).then(function(res) {
				if(res) {
					$http.post("http://172.17.0.13:3000/devolverLivro",
						{ params: {
									"id": idLivro,
									"userLoged": $scope.session.email,
									"userEmprestado": userEmprestado}
									})
						.success(function(response) {
										if (response == "SUCCESS") {
											$ionicPopup.alert({
											 title: 'Sucesso',
											 template: 'Livro devolvido com sucesso!'
										 }).then(function(res) {
										 	$state.go("menu.livrando_meus_livros");
										 });
										}
										else {
											$ionicPopup.alert({
											 title: 'Ouch',
											 template: 'Ocorreu algum erro.'
										 });
										}
										$ionicLoading.hide();
									})
						.error(function(response) {
									 	$ionicLoading.hide();
									});
				}
			});*/
		}
		else {
			$ionicPopup.confirm({
				title: 'Confirmação',
				content: 'Deseja remover esse livro?',
				cancelText: 'Não',
				okText: 'Sim'
			}).then(function(res) {
				if(res) {
					$http.post("http://172.17.0.13:3000/removerLivro",
						{ params: {
									"id": idLivro,
									"email": $scope.session.email}
									})
						.success(function(response) {
										if (response == "REMOVE_SUCCESS") {
											$ionicPopup.alert({
											 title: 'Sucesso',
											 template: 'Livro removido com sucesso!'
										 }).then(function(res) {
										 	$state.go("menu.livrando_meus_livros");
										 });
										}
										else {
											$ionicPopup.alert({
											 title: 'Ouch',
											 template: 'Ocorreu algum erro.'
										 });
										}
										$ionicLoading.hide();
									})
						.error(function(response) {
									 	$ionicLoading.hide();
									});
				}
			});
		}
	}
	$scope.abrirAcoes = function(idLivro){
			if ($scope.status == "Lista de doação") {
				$ionicPopup.alert({
					title: 'Alerta',
					template: 'Este livro já foi adicionado para doação!'
				});
			}
			else if ($scope.status == "Lista de empréstimo") {
				$ionicPopup.alert({
					title: 'Alerta',
					template: 'Este livro já foi adicionado para empréstimo!'
				});
			}
			else if ($scope.status == "Lista de troca") {
				$ionicPopup.alert({
					title: 'Alerta',
					template: 'Este livro já foi adicionado para troca!'
				});
			}
			else if ($scope.status == "Lista de venda") {
				$ionicPopup.alert({
					title: 'Alerta',
					template: 'Este livro já foi adicionado para venda!'
				});
			}
			else if ($scope.status == "Emprestado de") {
				/*$ionicPopup.alert({
					title: 'Alerta',
					template: 'Você não pode fazer essa ação pois este livro é emprestado!'
				});*/
			}
			else if ($scope.status == "Emprestado para") {
				$ionicPopup.alert({
					title: 'Alerta',
					template: 'Você não pode fazer isso no momento pois este livro está emprestado!'
				})
			}
			else {
				$rootScope.rootScopeIdLivroClicado = idLivro;
				$state.go("menu.livrando_meus_livros_acoes");
			}
		}
		$scope.irParaPontoEncontro = function(escolha){
	    $rootScope.rootScopeEscolha = escolha;
	    if (escolha == "trocar") {
	        $state.go("menu.livrando_meus_livros_texto_troca");
	    }
	    else if (escolha == "vender") {
	        $state.go("menu.livrando_meus_livros_valor_venda");
	    }
	    else {
	        $state.go("menu.livrando_meus_livros_ponto_encontro_pesquisa");
	    }
	}
	$scope.irParaPontoEncontroAposValor = function(valor){
		if (!valor) {
			$ionicPopup.alert({
				title: 'Alerta',
				template: 'Preencha o campo antes'
			});
		}else{
	    $rootScope.rootScopeValorLivro = valor;
	    $state.go("menu.livrando_meus_livros_ponto_encontro_pesquisa");
		}
	}
	$scope.irParaPontoEncontroAposTexto = function(texto){
		if (!texto) {
			$ionicPopup.alert({
				title: 'Alerta',
				template: 'Preencha o campo antes'
			});
		}else{
			$rootScope.rootScopeTextoTroca = texto;
	    $state.go("menu.livrando_meus_livros_ponto_encontro_pesquisa");
		}
	}
	$scope.abrirPoeMapa = function(){
		$state.go("menu.livrando_meus_livros_ponto_encontro_mapa");
	}
	$scope.abrirPoePesquisa = function(){
		$state.go("menu.livrando_meus_livros_ponto_encontro_pesquisa");
	}
	$scope.buscarPontoEncontro = function(textoBusca, selecao){
		if (!textoBusca) {
			$ionicPopup.alert({
				title: 'Alerta',
				template: 'Preencha o campo de pesquisa antes'
			});
		}
		else {
			$http.post("http://172.17.0.13:3000/buscarPontoEncontro",
				{ params: {
							"textoBusca": textoBusca,
							"selecao": selecao}
							})
				.success(function(response) {
											$scope.pontoencontro = response;
											$ionicLoading.hide();
							})
				.error(function(response) {
										 $ionicLoading.hide();
							});
		}
	}
	$scope.pontoEncontroClicado = function(id){
		$rootScope.rootScopePOE = id;
		$state.go('menu.livrando_meus_livros_acoes_finalizar');
	}
	$scope.acoesBuscarLivro = function(){
		$http.post("http://172.17.0.13:3000/buscarLivroAdicionarClicado",
			{ params: {
						"id": $rootScope.rootScopeIdLivroClicado
						}
						})
			.success(function(response) {
										$scope.livroClicado = response;
										$ionicLoading.hide();
            })
            .error(function(response) {
                   $ionicLoading.hide();
            });
	}
	$scope.acoesBuscarPOE = function(){
		$http.post("http://172.17.0.13:3000/acoesBuscarPOE",
			{ params: {
						"id": $rootScope.rootScopePOE
						}
						})
			.success(function(response) {
										$scope.pe = response;
										$ionicLoading.hide();
            })
            .error(function(response) {
                   $ionicLoading.hide();
            });
	}
	$scope.finalizarAcao = function(){
		if ($rootScope.rootScopeEscolha == "doar") {
			$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
			$http.post("http://172.17.0.13:3000/finalizarAcao",
				{ params: {
							"email": $scope.session.email,
							"livro": $rootScope.rootScopeIdLivroClicado,
							"pontoEncontro": $rootScope.rootScopePOE,
							"escolha": $rootScope.rootScopeEscolha}
							})
				.success(function(response) {
									if (response == "SUCCESS") {
										$ionicPopup.alert({
											title: 'Sucesso',
											content: 'Agora seu livro está na lista de doação!'
										}).then(function(res) {
											$ionicLoading.hide();
											$state.go('menu.livrando_meus_livros');
										});
									}
							})
				.error(function(response) {
									$ionicPopup.alert({
										title: 'Alerta',
										template: 'Algo deu errado!'
									});
									$ionicLoading.hide();
							});
		}
		else if ($rootScope.rootScopeEscolha == "emprestar") {
			$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
			$http.post("http://172.17.0.13:3000/finalizarAcao",
				{ params: {
							"email": $scope.session.email,
							"livro": $rootScope.rootScopeIdLivroClicado,
							"pontoEncontro": $rootScope.rootScopePOE,
							"escolha": $rootScope.rootScopeEscolha}
							})
				.success(function(response) {
									if (response == "SUCCESS") {
										$ionicPopup.alert({
											title: 'Sucesso',
											content: 'Agora seu livro está na lista de empréstimo!'
										}).then(function(res) {
											$ionicLoading.hide();
											$state.go('menu.livrando_meus_livros');
										});
									}
							})
				.error(function(response) {
									$ionicPopup.alert({
										title: 'Alerta',
										template: 'Algo deu errado!'
									});
									$ionicLoading.hide();
							});
		}
		else if ($rootScope.rootScopeEscolha == "trocar") {
			$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
			$http.post("http://172.17.0.13:3000/finalizarAcao",
				{ params: {
							"email": $scope.session.email,
							"livro": $rootScope.rootScopeIdLivroClicado,
							"pontoEncontro": $rootScope.rootScopePOE,
							"escolha": $rootScope.rootScopeEscolha,
							"textoTroca": $rootScope.rootScopeTextoTroca}
							})
				.success(function(response) {
									if (response == "SUCCESS") {
										$ionicPopup.alert({
											title: 'Sucesso',
											content: 'Agora seu livro está na lista de troca!'
										}).then(function(res) {
											$ionicLoading.hide();
											//$scope.buscarMeusLivros();
											$state.go('menu.livrando_meus_livros');
										});
									}
							})
				.error(function(response) {
									$ionicPopup.alert({
										title: 'Alerta',
										template: 'Algo deu errado!'
									});
									$ionicLoading.hide();
							});
			$rootScope.rootScopeTextoTroca = "";
		}
		else if ($rootScope.rootScopeEscolha == "vender") {
			$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
			$http.post("http://172.17.0.13:3000/finalizarAcao",
				{ params: {
							"email": $scope.session.email,
							"livro": $rootScope.rootScopeIdLivroClicado,
							"pontoEncontro": $rootScope.rootScopePOE,
							"escolha": $rootScope.rootScopeEscolha,
							"valor": $rootScope.rootScopeValorLivro}
							})
				.success(function(response) {
									if (response == "SUCCESS") {
										$ionicPopup.alert({
											title: 'Sucesso',
											content: 'Agora seu livro está na lista de venda!'
										}).then(function(res) {
											$ionicLoading.hide();
											$state.go('menu.livrando_meus_livros');
										});
									}
							})
				.error(function(response) {
									$ionicPopup.alert({
										title: 'Alerta',
										template: 'Algo deu errado!'
									});
									$ionicLoading.hide();
							});
			$rootScope.rootScopeValorLivro = "";
		}
	}
	$scope.cancelarPontoEncontro = function(){
		$rootScope.rootScopeValorLivro = "";
		$rootScope.rootScopeTextoTroca = "";
		$state.go('menu.livrando_meus_livros_clicado');
	}
	$scope.acaoFinalizarInfo = function(livro, poe){

		/*$http.post("http://172.17.0.13:3000/acaoFinalizarInfoLivro",
			{ params: {
						"livro": livro,}
						})
			.success(function(response) {
										$scope.livro = response;
										$ionicLoading.hide();
						})
			.error(function(response) {
									 $ionicLoading.hide();
						});
			$http.post("http://172.17.0.13:3000/acaoFinalizarInfoPoe",
				{ params: {
							"poe": poe,}
							})
				.success(function(response) {
											$scope.pontoencontro = response;
											$ionicLoading.hide();
							})
				.error(function(response) {
										 $ionicLoading.hide();
							});*/
	}
	$scope.notificacoes = function(){
		$state.go('menu.livrando_meus_livros_notificacoes');
	}
	$scope.buscarNotificacoesLivros = function(){
		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		$http.post("http://172.17.0.13:3000/buscarNotificacoesLivros",
			{ params: {
				"userLogged": $scope.session.email
				}
			})
			.success(function(response) {
					response = response.slice().reverse();
					$scope.result = response;

					//$scope.lin1col1 = " quer seu livro ";
					//$scope.lin1col2 = " que está disponível para ";
					//$scope.lin1col3 = ".";
					if ($scope.result.status == 'doacao') {
						$scope.status = 'doação';
					}
					else if ($scope.result.status == 'emprestimo') {
						$scope.status = 'empréstimo';
					}
					else if ($scope.result.status == 'troca') {
						$scope.status = 'troca';
					}
					else if ($scope.result.status == 'venda') {
						$scope.status = 'venda';
					}

          $ionicLoading.hide();
            })
      .error(function(response) {
					$ionicLoading.hide();
				});
	}
	$scope.entregarLivro = function(id, amigo, livroNome, status, livroId, poe){

	 	$rootScope.rootScopeAmigoTroca = amigo;
		$rootScope.rootScopeIdOutro = id;
		$rootScope.rootScopeIdOutroLivro = livroId;
		$rootScope.rootScopeIdLivroNome = livroNome;

		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		if (status == "troca") {
			$state.go('menu.livrando_meus_livros_notificacoes_livros_troca');
		}
		else if (status == "emprestimo") {
			$ionicPopup.confirm({
				title: 'Confirmação',
				content: 'Deseja realmente compartilhar seu livro?',
				cancelText: 'Recusar',
				okText: 'Aceitar'
			}).then(function(res) {
				if(res) {
					$http.post("http://172.17.0.13:3000/compartilharLivroEmprestimo",
						{ params: {
							"id": id,
							"amigo": amigo,
							"userLoged": $scope.session.email,
							"livroId": livroId,
							"poe": poe
							}
						})
						.success(function(response) {
										if (response == "SUCCESS") {
											$ionicPopup.alert({
		                   title: 'Sucesso',
		                   template: 'Seu livro ' + livroNome + ' foi emprestado!'
										 }).then(function(res) {
												$ionicLoading.hide();
												$state.go('menu.livrando_meus_livros');
										 });
										}
			            })
			      .error(function(response) {
										if (response == "ERROR") {
											$ionicPopup.alert({
		                   title: 'Alerta',
		                   template: 'Algo deu errado!'
										 });
											$ionicLoading.hide();
										}
							});
				}
			});
		}
		else {
			$ionicPopup.confirm({
				title: 'Confirmação',
				content: 'Deseja realmente entregar seu livro?',
				cancelText: 'Recusar',
				okText: 'Aceitar'
			}).then(function(res) {
				if(res) {
					$http.post("http://172.17.0.13:3000/compartilharLivro",
						{ params: {
							"id": id,
							"amigo": amigo,
							"userLoged": $scope.session.email,
							"livroId": livroId,
							"status": status,
							"poe": poe
							}
						})
						.success(function(response) {
										if (response == "SUCCESS") {
											$ionicPopup.alert({
		                   title: 'Sucesso',
		                   template: 'Seu livro ' + livroNome + ' foi compartilhado!'
										 }).then(function(res) {
												$ionicLoading.hide();
												$state.go('menu.livrando_meus_livros');
										 });
										}
			            })
			      .error(function(response) {
										if (response == "ERROR") {
											$ionicPopup.alert({
		                   title: 'Alerta',
		                   template: 'Algo deu errado!'
										 });
											$ionicLoading.hide();
										}
							});
				}
			});
		}
	}
	$scope.mostrarNotificacao = function(id, amigo, livroNome, status, livroId, poe){

	 	$rootScope.rootScopeAmigoTroca = amigo;
		$rootScope.rootScopeIdOutro = id;
		$rootScope.rootScopeIdOutroLivro = livroId;
		$rootScope.rootScopeIdLivroNome = livroNome;

		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
			$ionicPopup.confirm({
				title: 'Confirmação',
				content: 'Deseja realmente compartilhar seu livro?',
				cancelText: 'Recusar',
				okText: 'Aceitar'
			}).then(function(res) {
				if(res) {
					$http.post("http://172.17.0.13:3000/irParaEntregas",
						{ params: {
							"id": id,
							"amigo": amigo,
							"userLoged": $scope.session.email,
							"livroId": livroId//,
							//"status": status,
							//"poe": poe
							}
						})
						.success(function(response) {
										if (response == "SUCCESS") {
											$ionicPopup.alert({
		                   title: 'Sucesso',
		                   template: 'Agora você só precisa entregar seu livro!'
										 }).then(function(res) {
												$ionicLoading.hide();
												$state.go('menu.livrando_meus_livros');
										 });
										}
			            })
			      .error(function(response) {
										if (response == "ERROR") {
											$ionicPopup.alert({
		                   title: 'Alerta',
		                   template: 'Algo deu errado!'
										 });
											$ionicLoading.hide();
										}
							});
				}
			});
	}
	$scope.buscarLivrosTroca = function(){
		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		$http.post("http://172.17.0.13:3000/buscarLivrosTroca",
			{ params: {
				"userLogged": $scope.session.email,
				"amigo": $rootScope.rootScopeAmigoTroca
				}
			})
			.success(function(response) {
					$scope.livros = response;
          $ionicLoading.hide();
            })
      .error(function(response) {
					$ionicLoading.hide();
				});
	}

	$scope.enviarNotificacaoTroca = function(id, amigo, idLivro, livroNome, idOutro, idOutroLivro, nomeLivro, poe){
	  $http.post("http://172.17.0.13:3000/compartilharLivroTroca",
	    { params: {
	      "id": id,
	      "amigo": amigo,
	      "userLoged": $scope.session.email,
	      "idLivro": idLivro,
	      "idOutro": idOutro,
	      "idOutroLivro": idOutroLivro,
	      "poe": poe
	      }
	    })
	  .success(function(response) {
	          if (response == "SUCCESS") {
	            $ionicPopup.alert({
	             title: 'Sucesso',
	             template: 'Seu livro ' + nomeLivro + ' foi compartilhado!'
	           }).then(function(res) {
	              $ionicLoading.hide();
	              $state.go('menu.livrando_meus_livros');
	           });
	          }
	        })
	    .error(function(response) {
	            if (response == "ERROR") {
	              $ionicPopup.alert({
	               title: 'Alerta',
	               template: 'Algo deu errado!'
	             });
	              $ionicLoading.hide();
	            }
	      });
	 }
	 $scope.buscarLivrosEntregas = function(){
 		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
 		$http.post("http://172.17.0.13:3000/buscarLivrosEntregas",
 			{ params: {
 				"userLoged": $scope.session.email
 				}
 			})
 			.success(function(response) {
 					response = response.slice().reverse();
 					//$scope.livros = response;
 					$scope.resultEntregar = response;
           $ionicLoading.hide();
             })
       .error(function(response) {
 					$ionicLoading.hide();
 				});
 	}
 	$scope.buscarLivrosReceber = function(){
 		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
 		$http.post("http://172.17.0.13:3000/buscarLivrosReceber",
 			{ params: {
 				"userLoged": $scope.session.email
 				}
 			})
 			.success(function(response) {
 					response = response.slice().reverse();
 					//$scope.livros = response;
 					$scope.resultReceber = response;
           $ionicLoading.hide();
             })
       .error(function(response) {
 					$ionicLoading.hide();
 				});
 	}
	$scope.buscarHistorico = function(){
		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		$http.post("http://172.17.0.13:3000/buscarHistorico",
			{ params: {
				"userLoged": $scope.session.email
				}
			})
			.success(function(response) {
					response = response.slice().reverse();
					$scope.livros = response;
          $ionicLoading.hide();
            })
      .error(function(response) {
					$ionicLoading.hide();
				});
	}
	$scope.abrirHistorico = function(){
		$state.go('menu.livrando_meus_livros_historico');
	}
	$scope.abrirMeusLivrosMais = function(){
		//$state.go('menu.livrando_meus_livros_mais');
		$state.go('menu.livrando_meus_livros_lista_compartilhamento');
	}
	$scope.abrirListaCompartilhamento = function(){
		$state.go('menu.livrando_meus_livros_lista_compartilhamento');
	}
	$scope.livroParaCompartilhamento = function(acao){
		if (acao == "doacao") {
			$rootScope.rootScopeAcaoDoacao = acao;
			$state.go('menu.livrando_meus_livros_lista_compartilhamento_doacao');
		}
		else if (acao == "emprestimo") {
			$rootScope.rootScopeAcaoEmprestimo = acao;
			$state.go('menu.livrando_meus_livros_lista_compartilhamento_emprestimo');
		}
		else if (acao == "troca") {
			$rootScope.rootScopeAcaoTroca = acao;
			$state.go('menu.livrando_meus_livros_lista_compartilhamento_troca');
		}
		else if (acao == "venda") {
			$rootScope.rootScopeAcaoVenda = acao;
			$state.go('menu.livrando_meus_livros_lista_compartilhamento_venda');
		}
	}
	$scope.buscarLivrosReferenteAcao = function(acao){
		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		$http.post("http://172.17.0.13:3000/buscarLivrosReferenteAcao",
			{ params: {
						"userLoged": $scope.session.email,
						"acao": acao
						}
						})
			.success(function(response) {
										$scope.livros = response;
                    $ionicLoading.hide();
            })
            .error(function(response) {

                   $ionicLoading.hide();

            });
	}
	$scope.irParaCadastrarLivro = function(){
		$state.go('menu.livrando_meus_livros_cadastrar');
	}
	$scope.validarLivro = function(){
		$ionicLoading.show({
						template: 'Buscando...'
				});
		$http.post("http://172.17.0.13:3000/validarLivro",
			{ params: {
						"input": $scope.data.isbn
						}
						})
			.success(function(response) {
				$ionicLoading.hide();
				if (response == "ERROR"){
					$ionicPopup.alert({
					 title: 'Alerta',
					 template: 'Livro não encontrado!' });
					 $ionicLoading.hide();
				}
				else {
					$scope.infLivro = response;
					$scope.infLivroNome = $scope.infLivro.title;
					$scope.infLivroAutor = $scope.infLivro.authors.toString();
					$scope.infLivroEditora = $scope.infLivro.publisher;
					$scope.infLivroAno = parseInt($scope.infLivro.publishedDate);
					$scope.infLivroGenero = $scope.infLivro.categories.toString();
					$scope.infLivroFoto = $scope.infLivro.imageLinks.smallThumbnail;
					$ionicLoading.hide();
				}
										/*if (response == "FOUND") {
											$ionicPopup.alert({
	                     title: 'FOUND',
	                     template: 'FOUND' });
										}
										else if (response == "NOT_FOUND") {
											$ionicPopup.alert({
	                     title: 'NOT_FOUND',
	                     template: 'NOT_FOUND' });
										}*/

            })
            .error(function(response) {

                   $ionicLoading.hide();

            });
	}
	$scope.cadastrarLivro = function(foto, nome, autor, editora, ano, genero){
		$ionicLoading.show({
						template: 'Cadastrando...'
				});
		$http.post("http://172.17.0.13:3000/cadastrarLivro",
			{ params: {
						"isbn": $scope.data.isbn,
						"foto": foto,
						"nome": nome,
						"autor": autor,
						"editora": editora,
						"ano": ano,
						"genero": genero
						}
						})
			.success(function(response) {
				if (response == "EXISTS") {
					$ionicPopup.alert({
					 title: 'Alerta',
					 template: 'Esse livro já está cadastrado na base de dados.' });
				}
				else if (response == "SUCCESS") {
					$ionicPopup.alert({
					 title: 'Sucesso',
					 template: 'Livro cadastrado com sucesso!' }).then(function(res) {
							$ionicLoading.hide();
							$state.go('menu.livrando_meus_livros_lista_compartilhamento');
						});
				}
				else if (response == "ERROR") {
					$ionicPopup.alert({
					 title: 'Erro',
					 template: 'Ocorreu algum erro durante o cadastro.' });
				}
                    $ionicLoading.hide();
            })
            .error(function(response) {
                   $ionicLoading.hide();
            });
	}
})
.controller('MeuPerfil', function($scope, IonicLogin, $ionicPopup,$ionicModal,$cordovaCamera,$http,$ionicLoading, $state, $rootScope) {

	$scope.lista = [];
  $scope.btn = false;
  $scope.btn2 = true;
  $scope.btn3 = false;

  $scope.$on('$ionicView.enter', function(e) {
    $scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
	  $scope.data = {} ;
	  $scope.data.email = $rootScope.email;
  });

  $scope.logout = function(){
       IonicLogin.logout($scope.session.email);
  }

	$scope.cadastrarLivro = function(){
		IonicLogin.cadastrarLivro($scope.data.nome, $scope.data.ano);
	}

//// Chama camera
	$scope.FotoCamera = function(){
	$scope.btn2 = false;
	$scope.btn3 = true;

	    var options = {
	      quality: 70,
	      destinationType: Camera.DestinationType.DATA_URL,
	      sourceType: Camera.PictureSourceType.CAMERA,
	      allowEdit: true,
	      encodingType: Camera.EncodingType.JPEG,
	      targetWidth: 500,
	      targetHeight: 500,
	      popoverOptions: CameraPopoverOptions,
	      saveToPhotoAlbum: true,
	      correctOrientation:true
	    };

	    $cordovaCamera.getPicture(options).then(function(imageData) {

	     $rootScope.rootScopeFoto  = "data:image/jpeg;base64," + imageData;

	    }, function(err) {

	    });


	}

	$scope.FotoGaleria = function(){
	$scope.btn2 = false;
	$scope.btn3 = true;


	    var options = {
	      quality: 70,
	      destinationType: Camera.DestinationType.DATA_URL,
	      sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
	      allowEdit: true,
	      encodingType: Camera.EncodingType.JPEG,
	      targetWidth: 500,
	      targetHeight: 500,
	      popoverOptions: CameraPopoverOptions,
	      saveToPhotoAlbum: true,
	      correctOrientation:true
	    };

	    $cordovaCamera.getPicture(options).then(function(imageData) {

	     $rootScope.rootScopeFoto  = "data:image/jpeg;base64," + imageData;

	    }, function(err) {

	    });


	}


	//$scope.carregar();
	//###############################################Enviar foto ######################################

	$scope.enviarFoto = function(){



	  $http.post("http://172.17.0.13:3000/enviarfoto",
	    { params: {
	      "userLoged":$scope.session.email,
	      "foto": $rootScope.rootScopeFoto}

	    })
	  .success(function(response) {
			if (response == "Sucesso"){

						$ionicPopup.alert({
							title: 'Sucesso!',
							template: 'Foto alterada com sucesso!'
						}).then(function(res){
						$scope.atualizarPerfil();
							$ionicLoading.hide();
							$state.go('menu.perfil');
						}
					);
							}else{
									$ionicPopup.alert({
						        title: 'Alerta',
						        template: 'Erro.'
						      });
								}



			    })
	  .error(function(response) {
	    $ionicLoading.hide();


	  });

	}



	$scope.limpar = function(){
	$scope.btn2 = true;
	$scope.btn3 = false;
	}

	  ////######################################foto da Camera##############################
	  $ionicModal.fromTemplateUrl('templates/foto.html', {
	      scope: $scope
	    }).then(function(modal) {
	      $scope.modal = modal;
	    });

	    // Triggered in the login modal to close it
	    $scope.closeFoto = function() {
	      $scope.modal.hide();
	    };

	    // Open the login modal
	    $scope.foto = function(facebook) {
				if(facebook != null){

				}else {
					 $scope.modal.show();
				}

	    };

		$scope.EditarPerfil = function(){
     $state.go('menu.editarPerfil');
}
$scope.atualizarPerfil = function(){

$http.post("http://172.17.0.13:3000/atualizarPerfil",
		{ params: {
					"userEmail": $scope.session.email
					}
					})
		.success(function(response) {
									$scope.user = response;
									/*$scope.editarPerfilNome = $scope.user.username;
									$scope.editarPerfilCidade = $scope.user.cidade;
									$scope.editarPerfilDataNascimento = $scope.user.DNascimento;
									$scope.editarPerfilDescricao = $scope.user.mensagem;*/
									if($scope.user.id != null){
										$scope.idFacebook = 'facebook';
									}
									$ionicLoading.hide();
					})
		.error(function(response) {
				$ionicLoading.hide();
			});
}

})
.controller('ResetPassword', function($scope, IonicLogin, $ionicLoading, $rootScope, $http, $ionicPopup, $state) {

  $scope.$on('$ionicView.enter', function(e) {
      $scope.data = {} ;
      $scope.data.email = $rootScope.email;
      $scope.mailNewCode();
  });

  $scope.mailNewCode = function(){

      if (  $scope.data.email == null ||  $scope.data.email == ""){
          $ionicPopup.alert({
                       title: 'Email',
                       template: 'Invalid email address.' });

          return ;
      }

      $rootScope.email = $scope.data.email;

      $http.post("http://172.17.0.13:3000/resetpassword",
            { params: { action: "generateResetCode", email: $scope.data.email}})
              .success(function(response) {
              if ( response == "error" ){
                  $ionicPopup.alert({
                       title: 'Ouch',
                       template: 'Parece que nós erramos em algum lugar.' });
              }
              else if (response == "user_not_found"){
                  $ionicPopup.alert({
                       title: 'Usuário não encontrado',
                       template: 'Não foi possível localizar o usuário com esse e-mail.' });
              }
              else{
                  $ionicPopup.alert({
                       title: 'Reset code enviado',
                       template: 'Enviamos um novo reset code para o seu endereço de e-mail. Insira-o no campo abaixo.' });
              }
            })
            .error(function(response) {
                $ionicPopup.alert({
                       title: 'Ouch',
                       template: 'Parece que nós erramos em algum lugar.' });
			});
  }

  $scope.saveNewPassword = function(){

      $rootScope.email = $scope.data.email;

      $http.post("http://172.17.0.13:3000/resetpassword",
            { params: { action: "setNewPassword", email: $scope.data.email,
                        token: $scope.data.token, password: $scope.data.password} })
              .success(function(response) {

                if ( response == "error" ){
                   $ionicPopup.alert({
                       title: 'Ouch',
                       template: 'Parece que erramos em algum lugar.' });
                }
                else if (response == "user_not_found"){
                    $ionicPopup.alert({
                       title: 'Usuário não encontrado',
                       template: 'Não foi possível localizar o usuário com esse e-mail.' });
                }
                else if (response == "new_password_saved"){
                    $ionicPopup.alert({
                       title: 'Nova senha salva',
                       template: 'Sua nova senha foi salva com sucesso!' });

                    $state.go('login');
                }
                else if ( response == "invalid_token"){
                     $ionicPopup.alert({
                        title: 'Reset Code inválido',
                       template: 'O reset code que você inseriu é inválido.' });
                }
            })
            .error(function(response) {
                 $ionicPopup.alert({
                       title: 'Ouch',
                       template: 'Parece que erramos em algum lugar.' });
        });
  }

})

.controller('ValidarEmail', function($scope, IonicLogin, $ionicLoading, $rootScope, $http, $ionicPopup, $state) {

	$scope.$on('$ionicView.enter', function(e) {
      $scope.data = {} ;
      $scope.data.email = $rootScope.email;

  });

  $scope.validaToken = function(){

      if (  $scope.data.token == null ||  $scope.data.token == ""){
          $ionicPopup.alert({
                       title: 'Campo em branco',
                       template: 'Insira o token para continuar!.' });

          return ;
      }


      $rootScope.email = $scope.data.email;


      $http.post("http://172.17.0.13:3000/validarEmail",
            { params: { email: $scope.data.email,
                        token: $scope.data.token} })
              .success(function(response) {

                if ( response == "erro" ){
                   $ionicPopup.alert({
                       title: 'Ops',
                       template: 'Parece que nos perdemos em algum lugar!.' });
                }
                else if (response == "usuario_nao_encontrado"){
                    $ionicPopup.alert({
                       title: 'Usuario não encontrado',
                       template: 'Não foi possível encontrar o usuário com esse e-mail.' });
                }
                else if (response == "token_validado"){
                    $ionicPopup.alert({
                       title: 'Sucesso!',
                       template: 'Sua conta foi criada com sucesso!!' });

                    $state.go('menu.livrando_linha_do_tempo');
                }
                else if ( response == "token_invalido"){
                     $ionicPopup.alert({
                       title: 'Codigo de validação invalido',
                       template: 'O codigo digitado esta incorreto.' });
                }
            })
            .error(function(response) {
                 $ionicPopup.alert({
									 title: 'Ops',
									 template: 'Parece que nos perdemos em algum lugar!.' });
        });
  }

})

.controller('IonicLogin', function($scope, IonicLogin, $ionicLoading, $http, $state, $rootScope, $ionicPopup, ngFB) {

   $scope.$on('$ionicView.enter', function(e) {
      $scope.data = {} ;
      $scope.data.email = $rootScope.email;
  });

  $scope.logout = function(){
		IonicLogin.logout();
  }

  $scope.login = function(){
		IonicLogin.login($scope.data.email, $scope.data.password);
  }

	//************************Login pelo facebook
	$scope.fbLogin = function () {
      ngFB.login({scope: 'email,publish_actions'}).then(
          function (response) {
              if (response.status === 'connected') {
                  console.log('Facebook login succeeded');
                //  $scope.closeLogin();

                    ngFB.api({
                    path: '/me',
                    params: {fields: 'id,name,email'}
                }).then(
                    function (user) {
                       $scope.user = user;

											 /*$ionicPopup.alert({
	                       title: "Alerta",
	                       template: $scope.user.city});*/

                  $scope.user.foto = "http://graph.facebook.com/"+"{{user.id}}"+"/picture?width=270&height=270";

											 $http.post("http://172.17.0.13:3000/validaLogin",
											 			{ params: { email: $scope.user.email,
											 									nome: $scope.user.name} })
											 				.success(function(response) {

																if ( response == "error" ){
								                   $ionicPopup.alert({
								                       title: 'Ops',
								                       template: 'Parece que nos perdemos em algum lugar!.' });
								                }
								                else if (response == "usuario_nao_encontrado"){

                                   $scope.user.foto = "http://graph.facebook.com/"+user.id+"/picture?width=270&height=270";
																			 IonicLogin.signUpFb($scope.user.name, $scope.user.email, $scope.user.id, $scope.user.foto);
																			 $rootScope.email = $scope.user.email;


								                }
								                else{
																	window.localStorage['session'] = JSON.stringify(response);
								                    $state.go('menu.livrando_linha_do_tempo');
								                }
								            })
								            .error(function(response) {
								                 $ionicPopup.alert({
																	 title: 'Ops',
																	 template: 'Parece que nos perdemos em algum lugar!.' });
								        });


                        //    IonicLogin.signUp($scope.user.name, $scope.user.email, $scope.user.id);

                      },

                    function (error) {
                        alert('Facebook error: ' + error.error_description);
                    });

              //    $state.transitionTo('menu.livrando_linha_do_tempo');
              } else {
                  alert('Facebook login failed');
              }
          });
  };
	//*******************Fim***********

  /*$scope.signUp = function(){
      IonicLogin.signUp($scope.data.email, $scope.data.password);
  }*/

  $scope.resetPassword = function(){
      $rootScope.email = $scope.data.email;

    //  alert($scope.loginForm.emailInput.$valid);

      if ( $scope.data.email != null && $scope.data.email != "" ){
           $state.go('resetpassword');
      }
      else{
          $ionicPopup.alert({
             title: 'E-mail inválido',
             template: 'Digite um endereço de e-mail válido primeiro.' });
      }
  }
	$scope.criarConta = function(){
		$state.go('criar_conta');
  }
	//início


	//fim
})
.controller('SplashController', function ($scope, $state, $window, $http){

    $scope.$on("$ionicView.enter", function(event) {
          $scope.checkSession();
    });

  $scope.checkSession = function () {

        if ( window.localStorage['session'] != null &&  window.localStorage['session'] != undefined )
        {
            var sesh = JSON.parse(window.localStorage['session']) ;

              $http.post("http://172.17.0.13:3000/checkSession",
                { params: { "session": JSON.stringify(sesh)}})
                  .success(function(response) {
                   if ( response == "error" || response == "LOGIN_FAIL" ){
                        $state.go('login');
                   }
                   else{
                       $state.go('menu.livrando_linha_do_tempo');
                  }
                })
                .error(function(response) {
                  $state.go('login');
            });
        }
        else{
           $state.go('login');
        }
				$state.go('login');
     }
})
.controller('LinhaTempoCtrl', function($scope, IonicLogin, $ionicLoading, $rootScope, $http, $ionicPopup, $state) {

	$scope.$on('$ionicView.enter', function(e) {
		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		$scope.data = {} ;
	});

	$scope.publicar = function(){

	$scope.session = JSON.parse( window.localStorage['session']) ;

			 $http.post("http://172.17.0.13:3000/publicacao",
			       { params: {
			         "userLoged": $scope.session.email,
			         "userpublicacao":$scope.data.comentario}
			       })
			     .success(function(response) {
			       //res_livro = JSON.stringify(response)
               if (response == "SUCCESS"){
								 $scope.buscarPublicacoes();
         $scope.data.comentario ='';
								$ionicLoading.hide();
							 }

			     })
			     .error(function(response) {
			       $ionicLoading.hide();

			       $ionicPopup.alert({
			         title: 'Alerta',
			         template: 'Erro.'
			       });
			     });

			 	}
$scope.buscarPublicacoes = function(){

$scope.session = JSON.parse( window.localStorage['session']) ;

$http.post("http://172.17.0.13:3000/buscarPublicacoes",
			{ params: {
				"userLoged": $scope.session.email}
			})
		.success(function(response) {
			//res_livro = JSON.stringify(response)
			response=response.slice().reverse();

      $scope.publicacoes = response;

			$ionicLoading.hide();
		})
		.error(function(response) {
			$ionicLoading.hide();

			$ionicPopup.alert({
				title: 'Alerta',
				template: 'Erro.'
			});
		})
		.finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });

}
$scope.like = function(id){
	$http.post("http://172.17.0.13:3000/like",
				{ params: {
					"userLoged": $scope.session.email,
					"id": id}
				})
			.success(function(response) {

					 $ionicLoading.hide();
			})
			.error(function(response) {

				$ionicLoading.hide();
			});
}

$scope.buscarLikes = function(id){
	$http.post("http://172.17.0.13:3000/buscarLikes",
				{ params: {
					"id": id}
				})
			.success(function(response) {
				if (response) {
					$scope.qtdLikes = response;
					$ionicLoading.hide();
				}
			})
			.error(function(response) {

				$ionicLoading.hide();
			});
}

})
.controller('ConversasCtrl', function($scope, $firebase, $rootScope, $ionicPopup, $state, $ionicScrollDelegate, $location, $anchorScroll, $http, IonicLogin, $ionicLoading) {

	$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information

	var db = new Firebase('https://livrando-f0af7.firebaseio.com/');
  var sync = $firebase(db);
	$scope.conversas = sync.$asArray();

	var array = [];
	var toArray = [];
	var arrayTest = [];

	var test = db.ref();
	test.on('value', function(data) {
		var datas = data.val();
		$rootScope.rootScopeDatas = datas;
		var keys = Object.keys(datas);
		$rootScope.rootScopeKeys = keys;

		for (var i = 0; i < keys.length; i++) {
			var k = keys[i];
      var from = datas[k].from;
      var message = datas[k].message;
      var to = datas[k].to;

			if (datas[k].to == $scope.session.username) {
        //if (arrayTest.indexOf(datas[k].from)) {
          arrayTest.push(datas[k].from);
        //}
      }
			if (datas[k].from == $scope.session.username) {
          arrayTest.push(datas[k].to);
      }
		}
		arrayTest = arrayTest.slice().reverse();
		var seen = {};
    var uniqueStudents = arrayTest.filter(function(item) {
      if (seen.hasOwnProperty(item)) {
          return false;
      }
      else {
          seen[item] = true;
          return true;
      }
    });

		$rootScope.chats = uniqueStudents;
		$scope.buscarFotoPessoasChat();
	});
	$scope.buscarFotoPessoasChat = function(){
		$http.post("http://172.17.0.13:3000/buscarFotoPessoasChat",
			{ params: {
						"arrayPessoas": $rootScope.chats
						}
						})
			.success(function(response) {
										$rootScope.chatsFotos = response;
                    $ionicLoading.hide();
            })
      .error(function(response) {
					$ionicLoading.hide();
				});
	}
	$scope.zerarRootScopeAmigo = function(){
		$rootScope.rootScopeAmigo = '';
	}
	$scope.amigoClicado = function(amigo){
		$rootScope.rootScopeAmigo = amigo;
		$state.go('menu.livrando_conversas_mensagens');
	}
	$scope.$on('irParaConversas', function(pessoa) {
		$ionicPopup.alert({
			title: 'IonicLogin.p',
			template: pessoa
		});
    $rootScope.rootScopeAmigo = pessoa;
		//$state.go('menu.livrando_conversas_mensagens');
  });
	$scope.buscarConversa = function(){
				if (!$rootScope.rootScopeAmigo) {
					$rootScope.rootScopeAmigo = IonicLogin.getPessoa();
				}

				$rootScope.newRootScopeAmigo = $rootScope.rootScopeAmigo;

		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		var aarray = [];
		$scope.mensagens = [];

		for (var i = 0; i < $rootScope.rootScopeKeys.length; i++){
			var kk = $rootScope.rootScopeKeys[i];

			if (($rootScope.rootScopeDatas[kk].from == $scope.session.username && $rootScope.rootScopeDatas[kk].to == $rootScope.rootScopeAmigo) || ($rootScope.rootScopeDatas[kk].from == $rootScope.rootScopeAmigo && $rootScope.rootScopeDatas[kk].to == $scope.session.username)) {
				//aarray.push($rootScope.rootScopeDatas[kk].message);
				//$scope.mensagens = aarray;
				$scope.mensagens.push({
					userLoged: $rootScope.rootScopeDatas[kk].from,
					text: $rootScope.rootScopeDatas[kk].message
				});
			}
			if ($rootScope.rootScopeDatas[kk].from == $scope.session.username && $rootScope.rootScopeDatas[kk].to == $rootScope.rootScopeAmigo) {
				$scope.userLoged = $rootScope.rootScopeDatas[kk].from;
			}
		}
		//$ionicScrollDelegate.scrollBottom(true);
		$location.hash('bottom');
		$anchorScroll();
		$scope.zerarRootScopeAmigo();
	}
	$scope.sendChat = function(conversa) {
		if (conversa.message) {
			$scope.conversas.$add({
				from: $scope.session.username,
				message: conversa.message,
				to: $rootScope.newRootScopeAmigo
			});
			conversa.message = "";
			/*$ionicPopup.alert({
				title: '$rootScope.rootScopeAmigo',
				template: $rootScope.rootScopeAmigo
			});
			$ionicPopup.alert({
				title: 'conversa.message',
				template: conversa.message
			});
			$ionicPopup.alert({
				title: '$scope.session.username',
				template: $scope.session.username
			});*/
		}
		$scope.buscarConversaDepoisDoChat();
	}
	$scope.buscarConversaDepoisDoChat = function(){

		/*$ionicPopup.alert({
			title: '$rootScope.newRootScopeAmigo',
			template: $rootScope.newRootScopeAmigo
		});*/

		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		var aarray = [];
		$scope.mensagens = [];

		for (var i = 0; i < $rootScope.rootScopeKeys.length; i++){
			var kk = $rootScope.rootScopeKeys[i];

			if (($rootScope.rootScopeDatas[kk].from == $scope.session.username && $rootScope.rootScopeDatas[kk].to == $rootScope.newRootScopeAmigo) || ($rootScope.rootScopeDatas[kk].from == $rootScope.newRootScopeAmigo && $rootScope.rootScopeDatas[kk].to == $scope.session.username)) {
				//aarray.push($rootScope.rootScopeDatas[kk].message);
				//$scope.mensagens = aarray;
				$scope.mensagens.push({
					userLoged: $rootScope.rootScopeDatas[kk].from,
					text: $rootScope.rootScopeDatas[kk].message
				});
			}
			if ($rootScope.rootScopeDatas[kk].from == $scope.session.username && $rootScope.rootScopeDatas[kk].to == $rootScope.newRootScopeAmigo) {
				$scope.userLoged = $rootScope.rootScopeDatas[kk].from;
			}
		}
		//$ionicScrollDelegate.scrollBottom(true);
		$location.hash('bottom');
		$anchorScroll();
		$scope.zerarRootScopeAmigo();
	}
	$scope.adicionarConversa = function() {
		$state.go('menu.livrando_conversas_amigos');
	}
	$scope.buscarAmigos = function() {
		$http.post("http://172.17.0.13:3000/buscarAmigo",
			{ params: {
						"userEmail": $scope.session.email
						}
						})
			.success(function(response) {
										$scope.amigos = response;
                    $ionicLoading.hide();
            })
      .error(function(response) {
					$ionicLoading.hide();
				});
	}


})

.controller('ChatDetailCtrl', function($scope, $stateParams, IonicLogin) {

})
.controller('AccountCtrl', function($scope) {

})
.controller('MenuCtrl', function($scope, $ionicPopup, IonicLogin, $http, $ionicLoading, $state) {

	$scope.$on('$ionicView.enter', function(e) {
    $scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		//$scope.abrirMenu();
  });

  $scope.logout = function(){
  	IonicLogin.logout($scope.session.email);
  }

	$scope.abrirEntregas = function(){
		$state.go('menu.livrando_meus_livros_receber');
  }

	$scope.abrirMenu = function(){
		/*$ionicPopup.alert({
			title: 'Menu',
			template: 'Entrou no menu!'
		});*/
		$http.post("http://172.17.0.13:3000/buscarLivrosEntregas",
			{ params: {
				"userLoged": $scope.session.email
				}
			})
			.success(function(response) {
					//response = response.slice().reverse();
					//$scope.livros = response;
					//$scope.result = response;
					if (response.length > 0) {
						var html = "<ion-item><div style='height:70px;padding-left:15px;padding-top:15px;color:#404040;font-size: 16px;'><i class='icon ion-android-cart menu-icons' style='padding-right:12px;'></i>Entregas pendentes</div></ion-item>";
						document.getElementById('linha_tabela').innerHTML = html;
					}
					else {
						$http.post("http://172.17.0.13:3000/buscarLivrosReceber",
							{ params: {
								"userLoged": $scope.session.email
								}
							})
							.success(function(response) {
									//response = response.slice().reverse();
									//$scope.livros = response;
									//$scope.result = response;
									if (response.length > 0) {
										var html = "<ion-item><div style='height:70px;padding-left:15px;padding-top:15px;color:#404040;font-size: 16px;'><i class='icon ion-android-cart menu-icons' style='padding-right:12px;'></i>Entregas pendentes</div></ion-item>";
										document.getElementById('linha_tabela').innerHTML = html;
									}
									else {
										var html = "";
										document.getElementById('linha_tabela').innerHTML = html;
									}
				          $ionicLoading.hide();
				            })
				      .error(function(response) {
									$ionicLoading.hide();
								});
					}

          $ionicLoading.hide();
            })
      .error(function(response) {
					$ionicLoading.hide();
				});
  }
})

.controller('AdminLivrariasCtrl', function($scope, $ionicPopup, IonicLogin, $http, $ionicLoading, $rootScope, $state) {
	$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information

	$scope.$on('$ionicView.enter', function(e) {
     $scope.data = {} ;
 	});

	$scope.buscarLivrarias = function(){
		$http.post("http://172.17.0.13:3000/buscarLivrarias",
			{ params: {
						}
						})
			.success(function(response) {
										$scope.livrarias = response;
										$ionicLoading.hide();
						})
						.error(function(response) {
									 $ionicLoading.hide();
						});
	}
	$scope.adicionarLivraria = function(){
		$state.go('menu_admin.admin_livrarias_cadastrar');
	}
	$scope.livrariaClicada = function(email){
		$rootScope.rootScopeLivrariaClicada = email;
		$state.go('menu_admin.admin_livrarias_clicada');
	}
	$scope.cadastrarLivraria = function(){
		if (!$scope.data.nome || !$scope.data.email || !$scope.data.senha) {
			$ionicPopup.alert({
			 title: 'Alerta',
			 template: 'Preencha todos os campos para realizar o cadastro!'
			});
		}
		else {
			$http.post("http://172.17.0.13:3000/cadastrarLivraria",
				{ params: {
					"nome": $scope.data.nome,
					"email": $scope.data.email,
					"senha": $scope.data.senha
					}
				})
				.success(function(response) {
							//$scope.livrarias = response;
							if (response == "SUCCESS") {
								/*
								$ionicPopup.confirm({
									title: 'Confirmação',
									content: 'Deseja remover esse livro?',
									cancelText: 'Não',
									okText: 'Sim'
								}).then(function(res) {
									if(res) {}
								*/
								$ionicPopup.alert({
								 title: 'Sucesso',
								 template: 'Livraria adicionada com sucesso!'
							 	}).then(function(res) {
 								 $ionicLoading.hide();
								 $state.go('menu_admin.admin_livrarias');
 							 });
							}
							else if (response == "ERROR") {
								$ionicPopup.alert({
								 title: 'Erro',
								 template: 'Algo deu errado'
							 	});
							}
							else if (response == "USER_EXISTS") {
								$ionicPopup.alert({
								 title: 'Alerta',
								 template: 'Livraria já cadastrada!'
							 	});
							}
							$ionicLoading.hide();
			})
			.error(function(response) {
				$ionicPopup.alert({
				 title: 'Erro',
				 template: 'Algo deu errado'
				});
						 $ionicLoading.hide();
			});
		}
	}
	$scope.buscarLivrariaClicada = function(){
		$http.post("http://172.17.0.13:3000/buscarLivrariaClicada",
			{ params: {
				"livraria": $rootScope.rootScopeLivrariaClicada
						}
						})
			.success(function(response) {
										$scope.livraria = response;
										$ionicLoading.hide();
						})
						.error(function(response) {
									 $ionicLoading.hide();
						});
	}

	$scope.buscarInfoLivrariaEditar = function(){
		$http.post("http://172.17.0.13:3000/buscarInfoLivrariaEditar",
			{ params: {
						"livraria": $rootScope.rootScopeLivrariaClicada}
						})
			.success(function(response) {
							$scope.livraria = response;
							$scope.emailLivraria = $scope.livraria.email;
							$scope.nomeLivraria = $scope.livraria.username;
							$ionicLoading.hide();
						})
			.error(function(response) {
							$ionicLoading.hide();
						});
	}
	$scope.editarLivraria = function(){
		$state.go('menu_admin.admin_livrarias_clicada_editar');
	}
	$scope.editarLivrariaSalvar = function(nomeLivraria){
		/*$ionicPopup.alert({
			title: 'nomeLivraria',
			content: nomeLivraria
		});*/
		$http.post("http://172.17.0.13:3000/editarLivrariaSalvar",
			{ params: {
						"nomeLivraria": nomeLivraria,
						"emailLivraria": $scope.rootScopeLivrariaClicada}
						})
			.success(function(response) {
							if (response == "SUCCESS") {
								$ionicPopup.alert({
								 title: 'Sucesso',
								 template: 'Livraria editada com sucesso!'
							 }).then(function(res) {
								 $scope.buscarLivrariaClicada();
								 $ionicLoading.hide();
								 $state.go('menu_admin.admin_livrarias_clicada');
								});
							}
						})
			.error(function(response) {
							$ionicLoading.hide();
						});
	}
	$scope.removerLivraria = function(livraria){
		$ionicPopup.confirm({
			title: 'Confirmação',
			content: 'Deseja remover esse livraria?',
			cancelText: 'Não',
			okText: 'Sim'
		}).then(function(res) {
			if(res) {
				$http.post("http://172.17.0.13:3000/removerLivraria",
					{ params: {
								"livraria": livraria}
								})
					.success(function(response) {
									if (response == "REMOVE_SUCCESS") {
										$ionicPopup.alert({
										 title: 'Sucesso',
										 template: 'Livraria removida com sucesso!'
									 }).then(function(res) {
										 		$ionicLoading.hide();
									 			$state.go("menu_admin.admin_livrarias");
								 			});
									}
									else {
										$ionicPopup.alert({
										 title: 'Ouch',
										 template: 'Ocorreu algum erro.'
									 });
									}
									$ionicLoading.hide();
								})
					.error(function(response) {
								 	$ionicLoading.hide();
								});
			}
		});
	}
})
.controller('AdminPontosEncontroCtrl', function($scope, $ionicPopup, IonicLogin, $http, $ionicLoading, $rootScope, $state) {
	$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information

	$scope.$on('$ionicView.enter', function(e) {
     $scope.data = {} ;
 	});

	$scope.buscarPontosEncontro = function(){
		$http.post("http://172.17.0.13:3000/buscarPontosEncontro",
			{ params: {
						}
						})
			.success(function(response) {
										$scope.pontosencontro = response;
										$ionicLoading.hide();
						})
						.error(function(response) {
									 $ionicLoading.hide();
						});
	}
	$scope.adicionarPontoEncontro = function(){
		$state.go('menu_admin.admin_pontos_encontro_cadastrar');
	}
	$scope.pontoEncontroClicado = function(id){
		$rootScope.rootScopePontoEncontroClicado = id;
		$state.go('menu_admin.admin_pontos_encontro_clicado');
	}
	$scope.cadastrarPontoEncontro = function(){
		if (!$scope.data.nome || !$scope.data.estado || !$scope.data.cidade || !$scope.data.bairro || !$scope.data.rua) {
			$ionicPopup.alert({
			 title: 'Alerta',
			 template: 'Preencha todos os campos para realizar o cadastro!'
			});
		}
		else {
			$http.post("http://172.17.0.13:3000/cadastrarPontoEncontro",
				{ params: {
					"nome": $scope.data.nome,
					"estado": $scope.data.estado,
					"cidade": $scope.data.cidade,
					"bairro": $scope.data.bairro,
					"rua": $scope.data.rua,
					"numero": $scope.data.numero
					}
				})
				.success(function(response) {
							if (response == "SUCCESS") {
								$ionicPopup.alert({
								 title: 'Sucesso',
								 template: 'Ponto de encontro adicionado com sucesso!'
								}).then(function(res) {
								 $ionicLoading.hide();
								 $state.go('menu_admin.admin_pontos_encontro');
							 });
							}
							else if (response == "ERROR") {
								$ionicPopup.alert({
								 title: 'Erro',
								 template: 'Algo deu errado'
								});
							}
							else if (response == "USER_EXISTS") {
								$ionicPopup.alert({
								 title: 'Alerta',
								 template: 'Já existe um ponto de encontro cadastrado com esse nome!'
								});
							}
							$ionicLoading.hide();
			})
			.error(function(response) {
				$ionicPopup.alert({
				 title: 'Erro',
				 template: 'Algo deu errado'
				});
						 $ionicLoading.hide();
			});
		}
	}
	$scope.buscarPontoEncontroClicado = function(){
		$http.post("http://172.17.0.13:3000/buscarPontoEncontroClicado",
			{ params: {
				"pontoEncontro": $rootScope.rootScopePontoEncontroClicado
						}
						})
			.success(function(response) {
										$scope.poe = response;
										$ionicLoading.hide();
						})
						.error(function(response) {
									 $ionicLoading.hide();
						});
	}
	$scope.removerPontoEncontro = function(pontoEncontro){

	}
})
.controller('AdminEstatisticasCtrl', function($scope, $ionicPopup, IonicLogin, $http, $ionicLoading, $rootScope, $state) {
	$scope.buscarEstatisticas = function(){
		$scope.buscarQtdUsuarios();
		$scope.buscarQtdLivros();
		$scope.buscarQtdLivrarias();
		$scope.buscarQtdPontosEncontro();
	}
	$scope.buscarQtdUsuarios = function(){
		$http.post("http://172.17.0.13:3000/buscarQtdUsuarios",
			{ params: {}
						})
			.success(function(response) {
										$scope.usuarios = response;
										$ionicLoading.hide();
						})
						.error(function(response) {
									 $ionicLoading.hide();
						});
	}
	$scope.buscarQtdLivros = function(){
		$http.post("http://172.17.0.13:3000/buscarQtdLivros",
			{ params: {}
						})
			.success(function(response) {
										$scope.livros = response;
										$ionicLoading.hide();
						})
						.error(function(response) {
									 $ionicLoading.hide();
						});
	}
	$scope.buscarQtdLivrarias = function(){
		$http.post("http://172.17.0.13:3000/buscarQtdLivrarias",
			{ params: {}
						})
			.success(function(response) {
										$scope.livrarias = response;
										$ionicLoading.hide();
						})
						.error(function(response) {
									 $ionicLoading.hide();
						});
	}
	$scope.buscarQtdPontosEncontro = function(){
		$http.post("http://172.17.0.13:3000/buscarQtdPontosEncontro",
			{ params: {}
						})
			.success(function(response) {
										$scope.pontosEncontro = response;
										$ionicLoading.hide();
						})
						.error(function(response) {
									 $ionicLoading.hide();
						});
	}
})
.controller('LivrariasMeusLivrosCtrl', function($scope, $ionicPopup, IonicLogin, $http, $ionicLoading, $rootScope, $state) {

  $scope.session = JSON.parse( window.localStorage['session']) ; // read the session information

	$scope.adicionarLivro = function(){
		$state.go('menu_livrarias.livrarias_adicionar_livros');
	}
	$scope.pesquisarLivro = function(textoBusca, selecao){
		if (!textoBusca) {
			$ionicPopup.alert({
				title: 'Alerta',
				template: 'Preencha o campo de pesquisa antes'
			});
		}
		else {
			$http.post("http://172.17.0.13:3000/pesquisarLivro",
				{ params: {
							"textoBusca": textoBusca,
							"selecao": selecao,
							"email": $scope.session.email}
							})
				.success(function(response) {
											$scope.livros = response;
			                $ionicLoading.hide();
			        })
			        .error(function(response) {
			               $ionicLoading.hide();
			        });
		}
	}
	$scope.adicionarLivroClicado = function(id){
		$rootScope.rootScopeIdLivroClicado = id;
		$state.go('menu_livrarias.livrarias_adicionar_livros_livro');
	}
	$scope.anunciarLivroClicado = function(id){
		$rootScope.rootScopeIdLivroClicado = id;
		$state.go('menu_livrarias.livrarias_anunciar_livro');
	}
	$scope.anunciarLivro = function(foto, idLivro, descricao){
		$scope.session = JSON.parse( window.localStorage['session']) ;
		$http.post("http://172.17.0.13:3000/anunciarLivro",
			{ params: {
						"idLivro": idLivro,
						"descricao": descricao,
						"userLoged": $scope.session.email,
						"foto": foto
						}
						})
			.success(function(response) {
				if (response == "SUCCESS") {
					$ionicPopup.alert({
					 title: 'Sucesso',
					 template: 'Livro anunciado com sucesso!'
					}).then(function(res) {
					 $ionicLoading.hide();
					 $state.go('menu_livrarias.livrarias_meus_livros');
					});
				}
				else if (response == "ERROR") {
					$ionicPopup.alert({
					 title: 'Erro',
					 template: 'Ocorreu algum erro!'
				 });
				}
										$ionicLoading.hide();
            })
            .error(function(response) {
                   $ionicLoading.hide();
            });
	}
	$scope.buscarLivroAdicionarClicado = function(){
		$http.post("http://172.17.0.13:3000/buscarLivroAdicionarClicado",
			{ params: {
						"id": $rootScope.rootScopeIdLivroClicado
						}
						})
			.success(function(response) {
										$scope.livroClicado = response;
										$ionicLoading.hide();
            })
            .error(function(response) {
                   $ionicLoading.hide();
            });
	}
	$scope.adicionarLivroAoPerfilLivrarias = function(idLivro, url){
		if (!url){
			$ionicPopup.alert({
				title: 'Alerta',
				template: 'Preencha o campo da URL antes'
			});
		}
		else {
			$http.post("http://172.17.0.13:3000/adicionarLivroAoPerfilLivrarias",
				{ params: {
							"id": idLivro,
							"email": $scope.session.email,
							"url": url}
							})
				.success(function(response) {
								if (response == "ADD_SUCCESS") {
									$ionicPopup.alert({
									 title: 'Sucesso',
									 template: 'Livro adicionado com sucesso!'
								 }).then(function(res) {
									 $ionicLoading.hide();
									 $state.go('menu_livrarias.livrarias_adicionar_livros');
								 });
								}
								else if (response == "EXIST") {
									$ionicPopup.alert({
									 title: 'Alert',
									 template: 'Esse livro já está na sua lista!'
								 });
								}
								else {
									$ionicPopup.alert({
									 title: 'Ouch',
									 template: 'Ocorreu algum erro.'
								 });
								}
							})
				.error(function(response) {
							 	$ionicLoading.hide();
							});
		}

	}
	$scope.buscarMeusLivros = function(){
		$http.post("http://172.17.0.13:3000/buscarMeusLivros",
			{ params: {
						"email": $scope.session.email
						}
						})
			.success(function(response) {
										$scope.livros = response;
                    $ionicLoading.hide();
            })
            .error(function(response) {

                   $ionicLoading.hide();

            });
	}
	$scope.meuLivroClicado = function(id, idUXL){
		$rootScope.rootScopeIdLivroClicado = id;
		$rootScope.rootScopeIdUXLLivroClicado = idUXL;
		$state.go('menu_livrarias.livrarias_meus_livros_livro');
	}
	$scope.buscarMeuLivroClicadoLivraria = function(){
		$http.post("http://172.17.0.13:3000/buscarMeuLivroClicadoLivraria",
			{ params: {
						"id": $rootScope.rootScopeIdLivroClicado,
						"idUXL": $rootScope.rootScopeIdUXLLivroClicado,
						"email": $scope.session.email}
						})
			.success(function(response) {
										$scope.livroClicadoLivraria = response;
										$ionicLoading.hide();
						})
						.error(function(response) {
									 $ionicLoading.hide();
						});
	}
	$scope.removerLivro = function(idLivro){
		$ionicPopup.confirm({
			title: 'Confirmação',
			content: 'Deseja remover esse livro?',
			cancelText: 'Não',
			okText: 'Sim'
		}).then(function(res) {
			if(res) {
				$http.post("http://172.17.0.13:3000/removerLivro",
					{ params: {
								"id": idLivro,
								"email": $scope.session.email}
								})
					.success(function(response) {
									if (response == "REMOVE_SUCCESS") {
										$ionicPopup.alert({
										 title: 'Sucesso',
										 template: 'Livro removido com sucesso!'
									 }).then(function(res) {
										 		$ionicLoading.hide();
										 $state.go("menu_livrarias.livrarias_meus_livros");
								 			});
									}
									else {
										$ionicPopup.alert({
										 title: 'Ouch',
										 template: 'Ocorreu algum erro.'
									 });
									}
									$ionicLoading.hide();
								})
					.error(function(response) {
								 	$ionicLoading.hide();
								});
			}
		});
	}
})
.controller('LivrosDesejadosCtrl', function($scope, $ionicPopup, $http, $ionicLoading) {

	$scope.$on('$ionicView.enter', function(e) {
		$scope.data = {} ;
	});

	/*$scope.doConfirm = function(){

		$ionicPopup.alert({
			title: 'Teste',
			template: 'doConfirm'
		});

		$ionicPopup.confirm({
			title: 'Consume Ice Cream',
			content: 'Are you sure you want to eat this ice cream?'
		}).then(function(res) {
			if(res) {
				console.log('You are sure');
				$ionicPopup.alert({
					title: 'Teste',
					template: 'Yes'
				});
			} else {
				console.log('You are not sure');
				$ionicPopup.alert({
					title: 'Teste',
					template: 'No'
				});
			}
		});
	}*/

	$scope.buscarLivrosDesejados = function(){
		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		$http.post("http://172.17.0.13:3000/buscarLivrosDesejados",
			{ params: {
						"email": $scope.session.email
								}
						})
			.success(function(response) {
										$scope.livros = response;
										$ionicLoading.hide();
						})
						.error(function(response) {

									 $ionicLoading.hide();

						});
	}
	$scope.removerDesejado = function(idLivro){
		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		$ionicPopup.confirm({
			title: 'Confirmação',
			content: 'Deseja remover esse livro da sua lista de desejados?',
			cancelText: 'Não',
			okText: 'Sim'
		}).then(function(res) {
			if(res) {
				$http.post("http://172.17.0.13:3000/removerDesejado",
					{ params: {
						"userLogged": $scope.session.email,
						"idLivro": idLivro
						}
					})
				.success(function(response) {
					if (response == "SUCCESS") {
						$scope.buscarLivrosDesejados();
					}
					$ionicLoading.hide();
				})
				.error(function(response) {
					$ionicLoading.hide();
				});
			}
		});
	}
})
.controller('DoarCtrl', function($scope, $ionicPopup, $state, $http, $ionicLoading, $rootScope) {

	$scope.buscarMeusLivrosDoar = function(){
		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		$http.post("http://172.17.0.13:3000/buscarMeusLivrosDoar",
			{ params: {
						"email": $scope.session.email}
						})
			.success(function(response) {
										$scope.livros = response;
										$ionicLoading.hide();
						})
						.error(function(response) {

									 $ionicLoading.hide();

						});
	}
	$scope.irParaAdicionarLivroDoar = function(){
		$state.go('menu.livrando_doar_livros');
	}
	$scope.checkLivros = { }
	$scope.adicionarLivroDoar = function(){
		var array = [];
		for (i in $scope.checkLivros){

			/*$ionicPopup.alert({
				title: 'adicionarLivroDoar 1',
				template: $scope.checkLivros[i]
			});*/

			if($scope.checkLivros[i] == true) {
        array.push(i);
      }
		}

		$rootScope.rootScopeArray = array;
		$state.go('menu.livrando_doar');
	}
	$scope.seguinteDoar = function(){
		/*$ionicPopup.alert({
			title: '$rootScope.rootScopePOE',
			template: $rootScope.rootScopePOE
		});
		$ionicPopup.alert({
			title: '$rootScope.rootScopeArray',
			template: $rootScope.rootScopeArray
		});*/
		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		$http.post("http://172.17.0.13:3000/seguinteDoar",
			{ params: {
						"email": $scope.session.email,
						"array": $rootScope.rootScopeArray,
						"pontoEncontro": $rootScope.rootScopePOE}
						})
			.success(function(response) {
								$ionicPopup.alert({
									title: 'Alerta',
									template: 'Os livros foram adicionados a lista de doação com sucesso!'
								});
								$ionicLoading.hide();
						})
			.error(function(response) {
								$ionicPopup.alert({
									title: 'Alerta',
									template: 'Algo deu errado!'
								});
								$ionicLoading.hide();
						});
	}
	$scope.cancelarDoar = function(){
		$rootScope.rootScopeArray = {};
		$state.go('menu.livrando_doar');
	}
	$scope.irParaAdicionarPontoEncontroDoar = function(){

		if ($rootScope.rootScopeArray) {
			$state.go('menu.livrando_doar_ponto_encontro');
		}
		else {
			$ionicPopup.alert({
				title: 'Alerta',
				template: 'Selecione pelo menos um livro para continuar!'
			});
		}
	}
	$scope.cancelarPontoEncontro = function(){
		$state.go('menu.livrando_doar');
	}
	$scope.abrirPoeMapa = function(){
		$state.go('menu.livrando_doar_ponto_encontro_mapa');
	}
	$scope.abrirPoePesquisa = function(){
		$state.go('menu.livrando_doar_ponto_encontro_pesquisa');
	}
	$scope.buscarPontoEncontro = function(textoBusca, selecao){
		$http.post("http://172.17.0.13:3000/buscarPontoEncontro",
			{ params: {
						"textoBusca": textoBusca,
						"selecao": selecao}
						})
			.success(function(response) {
										$scope.pontoencontro = response;
										$ionicLoading.hide();
						})
			.error(function(response) {
									 $ionicLoading.hide();
						});
	}
	$scope.pontoEncontroMapaOK = function(){
		$state.go('menu.livrando_doar_ponto_encontro');
	}
	$scope.pontoEncontroClicado = function(id){
		$rootScope.rootScopePOE = id;
		$state.go('menu.livrando_doar_ponto_encontro');
	}
})

.controller('EmprestarCtrl', function($scope, $ionicPopup, $state, $http, $ionicLoading, $rootScope) {

	$scope.buscarMeusLivrosEmprestar = function(){
		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		$http.post("http://172.17.0.13:3000/buscarMeusLivrosEmprestar",
			{ params: {
						"email": $scope.session.email}
						})
			.success(function(response) {
										$scope.livros = response;
										$ionicLoading.hide();
						})
						.error(function(response) {

									 $ionicLoading.hide();

						});
	}
	$scope.irParaAdicionarLivroEmprestar = function(){
		$state.go('menu.livrando_emprestar_livros');
	}
	$scope.checkLivros = { }
	$scope.adicionarLivroEmprestar = function(){
		var array = [];
		for (i in $scope.checkLivros){

			if($scope.checkLivros[i] == true) {
        array.push(i);
      }
		}

		$rootScope.rootScopeArrayEmprestar = array;
		$state.go('menu.livrando_emprestar');
	}
	$scope.seguinteEmprestar = function(){
		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		$http.post("http://172.17.0.13:3000/seguinteEmprestar",
			{ params: {
						"email": $scope.session.email,
						"array": $rootScope.rootScopeArrayEmprestar,
						"pontoEncontro": $rootScope.rootScopePOEEmprestar}
						})
			.success(function(response) {
								$ionicPopup.alert({
									title: 'Alerta',
									template: 'Os livros foram adicionados a lista de empréstimo com sucesso!'
								});
								$ionicLoading.hide();
						})
			.error(function(response) {
								$ionicPopup.alert({
									title: 'Alerta',
									template: 'Algo deu errado!'
								});
								$ionicLoading.hide();
						});
	}
	$scope.cancelarEmprestar = function(){
		$rootScope.rootScopeArrayEmprestar = {};
		$state.go('menu.livrando_emprestar');
	}
	$scope.irParaAdicionarPontoEncontroEmprestar = function(){
		if ($rootScope.rootScopeArrayEmprestar) {
			$state.go('menu.livrando_emprestar_ponto_encontro');
		}
		else {
			$ionicPopup.alert({
				title: 'Alerta',
				template: 'Selecione pelo menos um livro para continuar!'
			});
		}
	}
	$scope.cancelarPontoEncontro = function(){
		$state.go('menu.livrando_emprestar');
	}
	$scope.abrirPoeMapa = function(){
		$state.go('menu.livrando_emprestar_ponto_encontro_mapa');
	}
	$scope.abrirPoePesquisa = function(){
		$state.go('menu.livrando_emprestar_ponto_encontro_pesquisa');
	}
	$scope.pontoEncontroMapaOK = function(){
		$state.go('menu.livrando_emprestar_ponto_encontro');
	}
	$scope.buscarPontoEncontro = function(textoBusca, selecao){
		$http.post("http://172.17.0.13:3000/buscarPontoEncontro",
			{ params: {
						"textoBusca": textoBusca,
						"selecao": selecao}
						})
			.success(function(response) {
										$scope.pontoencontro = response;
										$ionicLoading.hide();
						})
			.error(function(response) {
									 $ionicLoading.hide();
						});
	}
	$scope.pontoEncontroClicado = function(id){
		$rootScope.rootScopePOEEmprestar = id;
		$state.go('menu.livrando_emprestar_ponto_encontro');
	}
})
.controller('VenderCtrl', function($scope, $ionicPopup, $state, $http, $ionicLoading, $rootScope) {

	$scope.buscarMeusLivrosVender = function(){
		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		$http.post("http://172.17.0.13:3000/buscarMeusLivrosVender",
			{ params: {
						"email": $scope.session.email}
						})
			.success(function(response) {
										$scope.livros = response;
										$ionicLoading.hide();
						})
						.error(function(response) {

									 $ionicLoading.hide();

						});
	}
	$scope.irParaAdicionarLivroVender = function(){
		$state.go('menu.livrando_vender_livros');
	}
	$scope.checkLivros = { }
	$scope.adicionarLivroVender = function(){
		var array = [];
		for (i in $scope.checkLivros){

			/*$ionicPopup.alert({
				title: 'adicionarLivroVender 1',
				template: $scope.checkLivros[i]
			});*/

			if($scope.checkLivros[i] == true) {
        array.push(i);
      }
		}

		$rootScope.rootScopeArrayVender = array;
		$state.go('menu.livrando_vender');
	}
	$scope.seguinteVender = function(){

		$scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
		$http.post("http://172.17.0.13:3000/seguinteVender",
			{ params: {
						"email": $scope.session.email,
						"array": $rootScope.rootScopeArrayVender,
						"pontoEncontro": $rootScope.rootScopePOEVender}
						})
			.success(function(response) {
								$ionicPopup.alert({
									title: 'Alerta',
									template: 'Os livros foram adicionados a lista de doação com sucesso!'
								});
								$ionicLoading.hide();
						})
			.error(function(response) {
								$ionicPopup.alert({
									title: 'Alerta',
									template: 'Algo deu errado!'
								});
								$ionicLoading.hide();
						});
	}
	$scope.cancelarVender = function(){
		$rootScope.rootScopeArrayVender = {};
		$state.go('menu.livrando_vender');
	}
	$scope.irParaAdicionarPontoEncontroVender = function(){

		if ($rootScope.rootScopeArrayVender) {
			$state.go('menu.livrando_vender_ponto_encontro');
		}
		else {
			$ionicPopup.alert({
				title: 'Alerta',
				template: 'Selecione pelo menos um livro para continuar!'
			});
		}
	}
	$scope.cancelarPontoEncontro = function(){
		$state.go('menu.livrando_vender');
	}
	$scope.abrirPoeMapa = function(){
		$state.go('menu.livrando_vender_ponto_encontro_mapa');
	}
	$scope.abrirPoePesquisa = function(){
		$state.go('menu.livrando_vender_ponto_encontro_pesquisa');
	}
	$scope.buscarPontoEncontro = function(textoBusca, selecao){
		$http.post("http://172.17.0.13:3000/buscarPontoEncontro",
			{ params: {
						"textoBusca": textoBusca,
						"selecao": selecao}
						})
			.success(function(response) {
										$scope.pontoencontro = response;
										$ionicLoading.hide();
						})
			.error(function(response) {
									 $ionicLoading.hide();
						});
	}
	$scope.pontoEncontroMapaOK = function(){
		$state.go('menu.livrando_vender_ponto_encontro');
	}
	$scope.pontoEncontroClicado = function(id){
		$rootScope.rootScopePOEVender = id;
		$state.go('menu.livrando_vender_ponto_encontro');
	}
})
.controller('TrocarCtrl', function($scope, $ionicPopup, $state, $http, $ionicLoading, $rootScope) {

	$scope.buscarMeusLivrosTrocar = function(){
	  $scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
	  $http.post("http://172.17.0.13:3000/buscarMeusLivrosTrocar",
	    { params: {
	          "email": $scope.session.email}
	          })
	    .success(function(response) {
	                  $scope.livros = response;
	                  $ionicLoading.hide();
	          })
	          .error(function(response) {

	                 $ionicLoading.hide();

	          });
	}
	$scope.irParaAdicionarLivroTrocar = function(){
	  $state.go('menu.livrando_trocar_livros');
	}
	$scope.checkLivros = { }
	$scope.adicionarLivroTrocar = function(){
	  var array = [];
	  for (i in $scope.checkLivros){
	    if($scope.checkLivros[i] == true) {
	      array.push(i);
	    }
	  }
	  $rootScope.rootScopeArrayTrocar = array;
	  $state.go('menu.livrando_trocar');
	}
	$scope.seguinteTrocar = function(){

	  $scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
	  $http.post("http://172.17.0.13:3000/seguinteTrocar",
	    { params: {
	          "email": $scope.session.email,
	          "array": $rootScope.rootScopeArrayTrocar,
	          "pontoEncontro": $rootScope.rootScopePOETrocar}
	          })
	    .success(function(response) {
	              $ionicPopup.alert({
	                title: 'Alerta',
	                template: 'Os livros foram adicionados a lista de troca com sucesso!'
	              });
	              $ionicLoading.hide();
	          })
	    .error(function(response) {
	              $ionicPopup.alert({
	                title: 'Alerta',
	                template: 'Algo deu errado!'
	              });
	              $ionicLoading.hide();
	          });
	}
	$scope.cancelarTrocar = function(){
	  $rootScope.rootScopeArrayTrocar = {};
	  $state.go('menu.livrando_trocar');
	}
	$scope.irParaAdicionarPontoEncontroTrocar = function(){

	  if ($rootScope.rootScopeArrayTrocar) {
	    $state.go('menu.livrando_trocar_ponto_encontro');
	  }
	  else {
	    $ionicPopup.alert({
	      title: 'Alerta',
	      template: 'Selecione pelo menos um livro para continuar!'
	    });
	  }
	}
	$scope.cancelarPontoEncontro = function(){
	  $state.go('menu.livrando_trocar');
	}
	$scope.abrirPoeMapa = function(){
	  $state.go('menu.livrando_trocar_ponto_encontro_mapa');
	}
	$scope.abrirPoePesquisa = function(){
	  $state.go('menu.livrando_trocar_ponto_encontro_pesquisa');
	}
	$scope.buscarPontoEncontro = function(textoBusca, selecao){
	  $http.post("http://172.17.0.13:3000/buscarPontoEncontro",
	    { params: {
	          "textoBusca": textoBusca,
	          "selecao": selecao}
	          })
	    .success(function(response) {
	                  $scope.pontoencontro = response;
	                  $ionicLoading.hide();
	          })
	    .error(function(response) {
	                 $ionicLoading.hide();
	          });
	}
	$scope.pontoEncontroMapaOK = function(){
	  $state.go('menu.livrando_trocar_ponto_encontro');
	}
	$scope.pontoEncontroClicado = function(id){
	  $rootScope.rootScopePOETrocar = id;
	  $state.go('menu.livrando_trocar_ponto_encontro');
	}
})
.controller('CriarConta', function($scope, IonicLogin, $rootScope, $ionicPopup,$state){
	$scope.$on('$ionicView.enter', function(e) {
     $scope.data = {} ;
     $scope.data.email = $rootScope.email;
 	});

	  $scope.signUp = function(){

		      IonicLogin.signUp($scope.data.nome, $scope.data.email, $scope.data.password);
					$rootScope.email = $scope.data.email;

		}



})

.controller('Livrando_Editar_Perfil', function($scope, $stateParams, IonicLogin, $ionicPopup,$http, $rootScope, $state, $ionicLoading, $filter) {


  $scope.$on('$ionicView.enter', function(e) {
      $scope.session = JSON.parse( window.localStorage['session']) ; // read the session information
	  $scope.data = {} ;
	  $scope.data.email = $rootScope.email;
  });
  $scope.logout = function(){
       IonicLogin.logout($scope.session.email);
  }
	$scope.atualizarPerfil = function(){

	$http.post("http://172.17.0.13:3000/atualizarPerfil",
			{ params: {
						"userEmail": $scope.session.email
						}
						})
			.success(function(response) {
										$scope.user = response;
										$scope.editarPerfilNome = $scope.user.username;
										$scope.editarPerfilCidade = $scope.user.cidade;
										$scope.editarPerfilDataNascimento = $filter('date')($scope.user.DNascimento, "dd/MM/yyyy");

										$scope.editarPerfilDescricao = $scope.user.mensagem;
										if($scope.user.id != null){
											$scope.idFacebook = 'facebook';
										}
										$ionicLoading.hide();
						})
			.error(function(response) {
					$ionicLoading.hide();
				});
	}
	$scope.SalvarEdi = function(nome, cidade, dataNascimento, descricao){

    $http.post("http://172.17.0.13:3000/editarperfil",
      { params: {
        "Usernome": nome,
        "UserDNascimento": dataNascimento,
        "userLoged": $scope.session.email,
        "UserCidade":  cidade,
			   "UserMensagem":  descricao}
      })
    .success(function(response) {

			if (response == "Sucesso"){

			$ionicPopup.alert({
				title: 'Sucesso!',
				template: 'Os dados foram alterados!'
			}).then(function(res){
			//	$scope.atualizarPerfil();
				$ionicLoading.hide();
				$state.go('menu.perfil');
			}
		);
				}else{
						$ionicPopup.alert({
			        title: 'Alerta',
			        template: 'Erro.'
			      });
					}



    })
    .error(function(response) {
      $ionicLoading.hide();

      $ionicPopup.alert({
        title: 'Alerta',
        template: 'Erro.'
      });
    });

	}

})
