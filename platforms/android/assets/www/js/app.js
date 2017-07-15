// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'firebase','ngCordova','ngOpenFB'])

.run(function($ionicPlatform, ngFB) {
  $ionicPlatform.ready(function() {
    ngFB.init({appId: '223372724825643'});
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.livrando_livrariashideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
	$ionicConfigProvider.tabs.position('bottom');

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  //menu do app
  .state('menu', {
    url: '/menu',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'MenuCtrl'
  })

  .state('menu.livrando_livrarias', {
      url: '/livrando_livrarias',
	  views: {
		'menuContent': {
			templateUrl: 'templates/livrando_livrarias.html',
			controller: 'LivrariasCtrl'
            }
	         }
    })
  .state('menu.livrando_linha_do_tempo', {
      url: '/livrando_linha_do_tempo',
	  views: {
		'menuContent': {
			templateUrl: 'templates/livrando_linha_do_tempo.html',
			controller: 'LinhaTempoCtrl'
            }
	         }
    })
    .state('menu.livrando_conversas', {
        url: '/livrando_conversas',
  	  views: {
  		'menuContent': {
  			templateUrl: 'templates/livrando_conversas.html',
  			controller: 'ConversasCtrl'
              }
  	         }
      })
      .state('menu.livrando_conversas_mensagens', {
          url: '/livrando_conversas_mensagens',
    	  views: {
    		'menuContent': {
    			templateUrl: 'templates/livrando_conversas_mensagens.html',
    			controller: 'ConversasCtrl'
                }
    	         }
        })
        .state('menu.livrando_conversas_amigos', {
            url: '/livrando_conversas_amigos',
      	  views: {
      		'menuContent': {
      			templateUrl: 'templates/livrando_conversas_amigos.html',
      			controller: 'ConversasCtrl'
                  }
      	         }
          })
    .state('menu.livrando_doar', {
        url: '/livrando_doar',
  	  views: {
  		'menuContent': {
  			templateUrl: 'templates/livrando_doar.html',
  			controller: 'DoarCtrl'
              }
  	         }
      })
      .state('menu.livrando_doar_livros', {
          url: '/livrando_doar_livros',
    	  views: {
    		'menuContent': {
    			templateUrl: 'templates/livrando_doar_livros.html',
    			controller: 'DoarCtrl'
                }
    	         }
      })
      .state('menu.livrando_doar_ponto_encontro', {
          url: '/livrando_doar_ponto_encontro',
    	  views: {
    		'menuContent': {
    			templateUrl: 'templates/livrando_doar_ponto_encontro.html',
    			controller: 'DoarCtrl'
                }
    	         }
      })
      .state('menu.livrando_doar_ponto_encontro_mapa', {
          url: '/livrando_doar_ponto_encontro_mapa',
    	  views: {
    		'menuContent': {
    			templateUrl: 'templates/livrando_doar_ponto_encontro_mapa.html',
    			controller: 'DoarCtrl'
                }
    	         }
      })
      .state('menu.livrando_doar_ponto_encontro_pesquisa', {
          url: '/livrando_doar_ponto_encontro_pesquisa',
    	  views: {
    		'menuContent': {
    			templateUrl: 'templates/livrando_doar_ponto_encontro_pesquisa.html',
    			controller: 'DoarCtrl'
                }
    	         }
      })
      .state('menu.livrando_emprestar', {
          url: '/livrando_emprestar',
    	  views: {
    		'menuContent': {
    			templateUrl: 'templates/livrando_emprestar.html',
    			controller: 'EmprestarCtrl'
                }
    	         }
        })
        .state('menu.livrando_emprestar_livros', {
            url: '/livrando_emprestar_livros',
      	  views: {
      		'menuContent': {
      			templateUrl: 'templates/livrando_emprestar_livros.html',
      			controller: 'EmprestarCtrl'
                  }
      	         }
        })
        .state('menu.livrando_emprestar_ponto_encontro', {
            url: '/livrando_emprestar_ponto_encontro',
      	  views: {
      		'menuContent': {
      			templateUrl: 'templates/livrando_emprestar_ponto_encontro.html',
      			controller: 'EmprestarCtrl'
                  }
      	         }
        })
        .state('menu.livrando_emprestar_ponto_encontro_mapa', {
            url: '/livrando_emprestar_ponto_encontro_mapa',
      	  views: {
      		'menuContent': {
      			templateUrl: 'templates/livrando_emprestar_ponto_encontro_mapa.html',
      			controller: 'EmprestarCtrl'
                  }
      	         }
        })
        .state('menu.livrando_emprestar_ponto_encontro_pesquisa', {
            url: '/livrando_emprestar_ponto_encontro_pesquisa',
      	  views: {
      		'menuContent': {
      			templateUrl: 'templates/livrando_emprestar_ponto_encontro_pesquisa.html',
      			controller: 'EmprestarCtrl'
                  }
      	         }
        })
        .state('menu.livrando_vender', {
            url: '/livrando_vender',
          views: {
          'menuContent': {
            templateUrl: 'templates/livrando_vender.html',
            controller: 'VenderCtrl'
                  }
                 }
          })
          .state('menu.livrando_vender_livros', {
              url: '/livrando_vender_livros',
            views: {
            'menuContent': {
              templateUrl: 'templates/livrando_vender_livros.html',
              controller: 'VenderCtrl'
                    }
                   }
          })
          .state('menu.livrando_vender_ponto_encontro', {
              url: '/livrando_vender_ponto_encontro',
            views: {
            'menuContent': {
              templateUrl: 'templates/livrando_vender_ponto_encontro.html',
              controller: 'VenderCtrl'
                    }
                   }
          })
          .state('menu.livrando_vender_ponto_encontro_mapa', {
              url: '/livrando_vender_ponto_encontro_mapa',
            views: {
            'menuContent': {
              templateUrl: 'templates/livrando_vender_ponto_encontro_mapa.html',
              controller: 'VenderCtrl'
                    }
                   }
          })
          .state('menu.livrando_vender_ponto_encontro_pesquisa', {
              url: '/livrando_vender_ponto_encontro_pesquisa',
            views: {
            'menuContent': {
              templateUrl: 'templates/livrando_vender_ponto_encontro_pesquisa.html',
              controller: 'VenderCtrl'
                    }
                   }
          })
          .state('menu.livrando_trocar', {
              url: '/livrando_trocar',
            views: {
            'menuContent': {
              templateUrl: 'templates/livrando_trocar.html',
              controller: 'TrocarCtrl'
                    }
                   }
            })
            .state('menu.livrando_trocar_livros', {
                url: '/livrando_trocar_livros',
              views: {
              'menuContent': {
                templateUrl: 'templates/livrando_trocar_livros.html',
                controller: 'TrocarCtrl'
                      }
                     }
            })
            .state('menu.livrando_trocar_ponto_encontro', {
                url: '/livrando_trocar_ponto_encontro',
              views: {
              'menuContent': {
                templateUrl: 'templates/livrando_trocar_ponto_encontro.html',
                controller: 'TrocarCtrl'
                      }
                     }
            })
            .state('menu.livrando_trocar_ponto_encontro_mapa', {
                url: '/livrando_trocar_ponto_encontro_mapa',
              views: {
              'menuContent': {
                templateUrl: 'templates/livrando_trocar_ponto_encontro_mapa.html',
                controller: 'TrocarCtrl'
                      }
                     }
            })
            .state('menu.livrando_trocar_ponto_encontro_pesquisa', {
                url: '/livrando_trocar_ponto_encontro_pesquisa',
              views: {
              'menuContent': {
                templateUrl: 'templates/livrando_trocar_ponto_encontro_pesquisa.html',
                controller: 'TrocarCtrl'
                      }
                     }
            })
        /*.state('menu.livrando_trocar', {
            url: '/livrando_trocar',
          views: {
          'menuContent': {
            templateUrl: 'templates/livrando_trocar.html',
            controller: 'TrocarCtrl'
                  }
                 }
          })
          .state('menu.livrando_trocar_livros', {
              url: '/livrando_trocar_livros',
            views: {
            'menuContent': {
              templateUrl: 'templates/livrando_trocar_livros.html',
              controller: 'TrocarCtrl'
                    }
                   }
          })
          .state('menu.livrando_vender', {
              url: '/livrando_vender',
            views: {
            'menuContent': {
              templateUrl: 'templates/livrando_vender.html',
              controller: 'VenderCtrl'
                    }
                   }
            })
            .state('menu.livrando_vender', {
                url: '/livrando_vender',
              views: {
              'menuContent': {
                templateUrl: 'templates/livrando_vender.html',
                controller: 'VenderCtrl'
                      }
                     }
            })*/
	.state('menu.livrando_procurar_pessoas', {
      url: '/livrando_procurar_pessoas',
	  views: {
		'menuContent': {
			templateUrl: 'templates/livrando_procurar_pessoas.html',
			controller: 'ProcurandoPessoasCtrl'
		}
	  }
    })
	.state('menu.livrando_procurar_pessoas_pessoa', {
      url: '/livrando_procurar_pessoas_pessoa',
	  views: {
		'menuContent': {
			templateUrl: 'templates/livrando_procurar_pessoas_pessoa.html',
			controller: 'ProcurandoPessoasCtrl'
		}
	  }
    })
	.state('menu.livrando_procurar_livros', {
      url: '/livrando_procurar_livros',
	  views: {
		'menuContent': {
			templateUrl: 'templates/livrando_procurar_livros.html',
			controller: 'ProcurandoLivrosCtrl'
		}
	  }
    })
  .state('menu.livrando_procurar_livros_livro', {
      url: '/livrando_procurar_livros_livro',
	  views: {
		'menuContent': {
			templateUrl: 'templates/livrando_procurar_livros_livro.html',
			controller: 'ProcurandoLivrosCtrl'
		}
	  }
    })
  /*.state('menu.tab', {
    url: '/tab',
    views: {
      'menuContent': {
        templateUrl: 'templates/tabs.html'
      }
    }
  })*/
  //tabs dentro do perfil do amigo
  .state('tab_amigo', {
    url: '/tab_amigo',
    abstract: true,
    templateUrl: 'templates/tabs_amigo.html'
  })
  .state('menu.livrando_meus_amigos_amigo', {
    url: '/livrando_meus_amigos_amigo',
    views: {
      'menuContent': {
        templateUrl: 'templates/livrando_meus_amigos_amigo.html',
        controller: 'MeusAmigosCtrl'
      }
    }
  })
  .state('menu.livrando_meus_amigos_amigo_livros', {
    url: '/livrando_meus_amigos_amigo_livros',
    views: {
      'menuContent': {
        templateUrl: 'templates/livrando_meus_amigos_amigo_livros.html',
        controller: 'MeusAmigosCtrl'
      }
    }
  })
  .state('menu.livrando_meus_amigos_adicionar', {
    url: '/livrando_meus_amigos_adicionar',
    views: {
      'menuContent': {
        templateUrl: 'templates/livrando_meus_amigos_adicionar.html',
        controller: 'MeusAmigosCtrl'
      }
    }
  })
  .state('menu.livrando_meus_amigos_adicionar_clicado', {
    url: '/livrando_meus_amigos_adicionar_clicado',
    views: {
      'menuContent': {
        templateUrl: 'templates/livrando_meus_amigos_adicionar_clicado.html',
        controller: 'MeusAmigosCtrl'
      }
    }
  })
  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
  /*.state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })*/
  .state('menu.perfil', {
    url: '/livrando_perfil',
    views: {
      'menuContent': {
        templateUrl: 'templates/livrando_perfil.html',
        controller: 'MeuPerfil'
      }
    }
  })
  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })

/*.state('tab.livrando_meus_amigos', {
    url: '/livrando_meus_amigos',
    views: {
      'tab-livrando_meus_amigos': {
        templateUrl: 'templates/tab-livrando_meus_amigos.html',
        controller: 'MeusAmigosCtrl'
      }
    }
  })*/
  .state('menu.livrando_meus_amigos', {
      url: '/livrando_meus_amigos',
      views: {
        'menuContent': {
          templateUrl: 'templates/livrando_meus_amigos.html',
          controller: 'MeusAmigosCtrl'
        }
      }
    })
.state('menu.livrando_meus_amigos_notificacoes', {
    url: '/livrando_meus_amigos_notificacoes',
    views: {
      'menuContent': {
        templateUrl: 'templates/livrando_meus_amigos_notificacoes.html',
        controller: 'MeusAmigosCtrl'
      }
    }
  })
/*.state('tab.livrando_meus_livros', {
    url: '/livrando_meus_livros',
    views: {
      'tab-livrando_meus_livros': {
        templateUrl: 'templates/tab-livrando_meus_livros.html',
        controller: 'MeusLivrosCtrl'
      }
    }
  })*/
  .state('menu.livrando_meus_livros', {
      url: '/livrando_meus_livros',
      views: {
        'menuContent': {
          templateUrl: 'templates/livrando_meus_livros.html',
          controller: 'MeusLivrosCtrl'
        }
      }
    })
    .state('menu.livrando_meus_livros_lista_compartilhamento', {
        url: '/livrando_meus_livros_lista_compartilhamento',
        views: {
          'menuContent': {
            templateUrl: 'templates/livrando_meus_livros_lista_compartilhamento.html',
            controller: 'MeusLivrosCtrl'
          }
        }
      })
      .state('menu.livrando_meus_livros_lista_compartilhamento_doacao', {
          url: '/livrando_meus_livros_lista_compartilhamento_doacao',
          views: {
            'menuContent': {
              templateUrl: 'templates/livrando_meus_livros_lista_compartilhamento_doacao.html',
              controller: 'MeusLivrosCtrl'
            }
          }
        })
    .state('menu.livrando_meus_livros_lista_compartilhamento_emprestimo', {
        url: '/livrando_meus_livros_lista_compartilhamento_emprestimo',
        views: {
          'menuContent': {
            templateUrl: 'templates/livrando_meus_livros_lista_compartilhamento_emprestimo.html',
            controller: 'MeusLivrosCtrl'
          }
        }
      })
      .state('menu.livrando_meus_livros_lista_compartilhamento_troca', {
          url: '/livrando_meus_livros_lista_compartilhamento_troca',
          views: {
            'menuContent': {
              templateUrl: 'templates/livrando_meus_livros_lista_compartilhamento_troca.html',
              controller: 'MeusLivrosCtrl'
            }
          }
        })
      .state('menu.livrando_meus_livros_lista_compartilhamento_venda', {
          url: '/livrando_meus_livros_lista_compartilhamento_venda',
          views: {
            'menuContent': {
              templateUrl: 'templates/livrando_meus_livros_lista_compartilhamento_venda.html',
              controller: 'MeusLivrosCtrl'
            }
          }
        })
        .state('menu.livrando_meus_livros_historico', {
            url: '/livrando_meus_livros_historico',
            views: {
              'menuContent': {
                templateUrl: 'templates/livrando_meus_livros_historico.html',
                controller: 'MeusLivrosCtrl'
              }
            }
          })
  .state('tab.livrando_meus_livros_cadastrar', {
    url: '/livrando_meus_livros_cadastrar',
    views: {
      'tab-livrando_meus_livros': {
        templateUrl: 'templates/tab-livrando_meus_livros_cadastrar.html',
		controller: 'MeusLivrosCtrl'
      }
    }
  })
  .state('menu.livrando_meus_livros_cadastrar', {
    url: '/livrando_meus_livros_cadastrar',
    views: {
      'menuContent': {
        templateUrl: 'templates/livrando_meus_livros_cadastrar.html',
		controller: 'MeusLivrosCtrl'
      }
    }
  })
  .state('menu.livrando_meus_livros_adicionar', {
    url: '/livrando_meus_livros_adicionar',
    views: {
      'menuContent': {
        templateUrl: 'templates/livrando_meus_livros_adicionar.html',
        controller: 'MeusLivrosCtrl'
    }
  }
})
.state('menu.livrando_meus_livros_adicionar_clicado', {
  url: '/livrando_meus_livros_adicionar_clicado',
  views: {
    'menuContent': {
      templateUrl: 'templates/livrando_meus_livros_adicionar_clicado.html',
      controller: 'MeusLivrosCtrl'
  }
}
})
.state('menu.livrando_meus_livros_clicado', {
  url: '/livrando_meus_livros_clicado',
  views: {
    'menuContent': {
      templateUrl: 'templates/livrando_meus_livros_clicado.html',
      controller: 'MeusLivrosCtrl'
  }
}
})
.state('menu.livrando_meus_livros_acoes', {
  url: '/livrando_meus_livros_acoes',
  views: {
    'menuContent': {
      templateUrl: 'templates/livrando_meus_livros_acoes.html',
      controller: 'MeusLivrosCtrl'
  }
}
})
.state('menu.livrando_meus_livros_acoes_finalizar', {
  url: '/livrando_meus_livros_acoes_finalizar',
  views: {
    'menuContent': {
      templateUrl: 'templates/livrando_meus_livros_acoes_finalizar.html',
      controller: 'MeusLivrosCtrl'
  }
}
})
.state('menu.livrando_meus_livros_ponto_encontro', {
  url: '/livrando_meus_livros_ponto_encontro',
  views: {
    'menuContent': {
      templateUrl: 'templates/livrando_meus_livros_ponto_encontro.html',
      controller: 'MeusLivrosCtrl'
  }
}
})
.state('menu.livrando_meus_livros_ponto_encontro_mapa', {
  url: '/livrando_meus_livros_ponto_encontro_mapa',
  views: {
    'menuContent': {
      templateUrl: 'templates/livrando_meus_livros_ponto_encontro_mapa.html',
      controller: 'MeusLivrosCtrl'
  }
}
})
.state('menu.livrando_meus_livros_ponto_encontro_pesquisa', {
  url: '/livrando_meus_livros_ponto_encontro_pesquisa',
  views: {
    'menuContent': {
      templateUrl: 'templates/livrando_meus_livros_ponto_encontro_pesquisa.html',
      controller: 'MeusLivrosCtrl'
  }
}
})
/*.state('tab.livrando_livros_desejados', {
    url: '/livrando_livros_desejados',
    views: {
      'tab-livrando_livros_desejados': {
        templateUrl: 'templates/tab-livrando_livros_desejados.html',
        controller: 'LivrosDesejadosCtrl'
      }
    }
  })*/
  .state('menu.editarPerfil', {
            url: '/EditarPerfil',
            views: {
              'menuContent': {
            templateUrl: 'templates/livrando_perfil_editar.html',
            controller: 'Livrando_Editar_Perfil'
             }
          }
          })
  .state('menu.livrando_livros_desejados', {
      url: '/livrando_livros_desejados',
      views: {
        'menuContent': {
          templateUrl: 'templates/livrando_livros_desejados.html',
          controller: 'LivrosDesejadosCtrl'
        }
      }
    })
  .state('splash', {
      url: '/splash',
      templateUrl: 'templates/splash.html',
      controller:'SplashController'
  })

  .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'IonicLogin'
    })
  .state('criar_conta', {
      url: '/criar_conta',
      templateUrl: 'templates/criar_conta.html',
      controller: 'CriarConta'
    })
    .state('validarEmail', {
        url: '/verificaEmail',
        templateUrl: 'templates/token.html',
        controller: 'ValidarEmail'
      })
  .state('resetpassword', {
      url: '/resetpassword',
      templateUrl: 'templates/resetpassword.html',
      controller: 'ResetPassword'
    })
	  .state('menu_admin', {
    url: '/menu_admin',
    abstract: true,
    templateUrl: 'templates/menu_admin.html',
    controller: 'MenuCtrl'
  })
  .state('menu_admin.admin_estatisticas', {
      url: '/admin_estatisticas',
	  views: {
		'menuContent': {
			templateUrl: 'templates/admin_estatisticas.html',
			controller: 'AdminEstatisticasCtrl'
            }
	         }
    })
  .state('menu_admin.admin_pontos_encontro', {
      url: '/admin_pontos_encontro',
	  views: {
		'menuContent': {
			templateUrl: 'templates/admin_pontos_encontro.html',
			controller: 'AdminPontosEncontroCtrl'
            }
	         }
    })
    .state('menu_admin.admin_pontos_encontro_cadastrar', {
        url: '/admin_pontos_encontro_cadastrar',
  	  views: {
  		'menuContent': {
  			templateUrl: 'templates/admin_pontos_encontro_cadastrar.html',
  			controller: 'AdminPontosEncontroCtrl'
              }
  	         }
      })
      .state('menu_admin.admin_pontos_encontro_clicado', {
          url: '/admin_pontos_encontro_clicado',
    	  views: {
    		'menuContent': {
    			templateUrl: 'templates/admin_pontos_encontro_clicado.html',
    			controller: 'AdminPontosEncontroCtrl'
                }
    	         }
        })
  .state('menu_admin.admin_livrarias', {
      url: '/admin_livrarias',
	  views: {
		'menuContent': {
			templateUrl: 'templates/admin_livrarias.html',
			controller: 'AdminLivrariasCtrl'
            }
	         }
    })
    .state('menu_admin.admin_livrarias_cadastrar', {
        url: '/admin_livrarias_cadastrar',
  	  views: {
  		'menuContent': {
  			templateUrl: 'templates/admin_livrarias_cadastrar.html',
  			controller: 'AdminLivrariasCtrl'
              }
  	         }
      })
      .state('menu_admin.admin_livrarias_clicada', {
          url: '/admin_livrarias_clicada',
    	  views: {
    		'menuContent': {
    			templateUrl: 'templates/admin_livrarias_clicada.html',
    			controller: 'AdminLivrariasCtrl'
                }
    	         }
        })
        .state('menu_admin.admin_livrarias_clicada_editar', {
            url: '/admin_livrarias_clicada_editar',
      	  views: {
      		'menuContent': {
      			templateUrl: 'templates/admin_livrarias_clicada_editar.html',
      			controller: 'AdminLivrariasCtrl'
                  }
      	         }
          })
  .state('menu_livrarias', {
    url: '/menu_livrarias',
    abstract: true,
    templateUrl: 'templates/menu_livrarias.html',
    controller: 'MenuCtrl'
  })
  .state('menu_livrarias.livrarias_meus_livros', {
      url: '/livrarias_meus_livros',
	  views: {
		'menuContent': {
			templateUrl: 'templates/livrarias_meus_livros.html',
			controller: 'LivrariasMeusLivrosCtrl'
            }
	         }
    })

    .state('menu_livrarias.livrarias_anunciar', {
        url: '/livrarias_anunciar',
  	  views: {
  		'menuContent': {
  			templateUrl: 'templates/livrarias_anunciar.html',
  			controller: 'LivrariasMeusLivrosCtrl'
              }
  	         }
      })
      .state('menu_livrarias.livrarias_anunciar_livro', {
          url: '/livrarias_anunciar_livro',
    	  views: {
    		'menuContent': {
    			templateUrl: 'templates/livrarias_anunciar_livro.html',
    			controller: 'LivrariasMeusLivrosCtrl'
                }
    	         }
        })
    .state('menu_livrarias.livrarias_meus_livros_livro', {
        url: '/livrarias_meus_livros_livro',
  	  views: {
  		'menuContent': {
  			templateUrl: 'templates/livrarias_meus_livros_livro.html',
  			controller: 'LivrariasMeusLivrosCtrl'
              }
  	         }
      })
  .state('menu_livrarias.livrarias_adicionar_livros', {
      url: '/livrarias_adicionar_livros',
	  views: {
		'menuContent': {
			templateUrl: 'templates/livrarias_adicionar_livros.html',
			controller: 'LivrariasMeusLivrosCtrl'
            }
	         }
    })
    .state('menu_livrarias.livrarias_adicionar_livros_livro', {
        url: '/livrarias_adicionar_livros_livro',
  	  views: {
  		'menuContent': {
  			templateUrl: 'templates/livrarias_adicionar_livros_livro.html',
  			controller: 'LivrariasMeusLivrosCtrl'
              }
  	         }
      })
  .state('menu.livrando_meus_amigos_amigo_amigos', {
    url: '/livrando_meus_amigos_amigo_amigos',
    views: {
      'menuContent': {
        templateUrl: 'templates/livrando_meus_amigos_amigo_amigos.html',
        controller: 'MeusAmigosCtrl'
      }
    }
  })
  .state('menu.livrando_meus_amigos_amigo_livros_clicado', {
    url: '/livrando_meus_amigos_amigo_livros_clicado',
    views: {
      'menuContent': {
        templateUrl: 'templates/livrando_meus_amigos_amigo_livros_clicado.html',
        controller: 'MeusAmigosCtrl'
      }
    }
  })
.state('menu.livrando_meus_livros_texto_troca', {
  url: '/livrando_meus_livros_texto_troca',
  views: {
    'menuContent': {
      templateUrl: 'templates/livrando_meus_livros_texto_troca.html',
      controller: 'MeusLivrosCtrl'
  }
}
})
.state('menu.livrando_meus_livros_valor_venda', {
  url: '/livrando_meus_livros_valor_venda',
  views: {
    'menuContent': {
      templateUrl: 'templates/livrando_meus_livros_valor_venda.html',
      controller: 'MeusLivrosCtrl'
  }
}
})
.state('menu.livrando_meus_livros_notificacoes', {
    url: '/livrando_meus_livros_notificacoes',
    views: {
      'menuContent': {
        templateUrl: 'templates/livrando_meus_livros_notificacoes.html',
        controller: 'MeusLivrosCtrl'
      }
    }
  })
  .state('menu.livrando_meus_livros_notificacoes_livros_troca', {
      url: '/livrando_meus_livros_notificacoes_livros_troca',
      views: {
        'menuContent': {
          templateUrl: 'templates/livrando_meus_livros_notificacoes_livros_troca.html',
          controller: 'MeusLivrosCtrl'
        }
      }
    })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('splash');

});
