Acessando view --> GET
                https://appgmoc.labnet.nce.ufrj.br/api?json={"apiKey": "sua api key ",
                                                    "view":"sua/rota"
                                                    }


Create --> POST
                https://appgmoc.labnet.nce.ufrj.br/api/tcrudOne/create?json={"apiKey": "seu token de acesso"
                                                "data": coloque aqui seu JASON que será inserido no banco.
                                                }
                ex: /api/tcrudOne/create?json={"data": {"a":4,"b":4},"apiKey": "key","view":"sua/rota"}


Read --> GET
                https://appgmoc.labnet.nce.ufrj.br/api/tcrudOne/read?json={"apiKey": "sua api key ",
                                                    "view":"sua/rota"
                                                    }


Update --> PUT
                https://appgmoc.labnet.nce.ufrj.br/api/tcrudOne/create?json={"apiKey": seu token de acesso,
                                                    "data": coloque aqui seu JASON que será inserido no banco.,
                                                    "_id":"5ea78c91f849f80282a68424"
                                                    }
                ex: /api/tcrudOne/update?jason={"apiKey":"sua api key","_id":"5ea78c91f849f80282a68424",
                                                "_id":" id do objeto a ser editado "
                                                }


Delete --> DELETE
                https://appgmoc.labnet.nce.ufrj.br/api/tcrudOne/delete?json={"apiKey": "sua api key",
                                                                "_id": "id do objeto a ser apagado"
                                                                }
                
                