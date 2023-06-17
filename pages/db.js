import SQLite from 'react-native-sqlite-storage';

// Abra ou crie o banco de dados
export const db = SQLite.openDatabase(
        { name: 'tasks.db', location: 'default' },
        () => {console.log('tasks.db aberto com sucesso'); return true},
        (error) => {console.log('erro ao abrir tasks.db'); return false},

    );

// Crie a tabela 'tasks' se não existir
export const criarTabela = async () =>
    await db.transaction(async (tx) => {
        await tx.executeSql(
            'CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, descricao TEXT, data DATE, hora TEXT, status BOOLEAN)',
            [],
            (tx, result) => {console.log('tabela criada com sucesso: ' + JSON.stringify(result)); return true},
            (error) => {console.log(error); return false},
        );
    });

// Recupere todas as tarefas do banco de dados
export const listarTarefas = async () => {
    await db.transaction(async (tx) => {
        await tx.executeSql('SELECT * FROM tasks', 
            [], 
            (txt, result) => {
                console.log(JSON.stringify(result))
                let tarefasArray = [];
                let len = result.rows.length;
                for (let i = 0; i < len; i++) {
                    let row = result.rows.item(i); 
                    tarefasArray.push(row);        
                }
                console.log(tarefasArray);
                return tarefasArray;
            },
            (error) => {console.log(error)}
        );
      });
}

// Insira a nova tarefa no banco de dados
export const addTarefa = async (novaTarefa) => {
    await db.transaction(async (tx) => {
      await tx.executeSql(
        'INSERT INTO tasks (descricao, data, hora, status) VALUES (?,?,?,?)', 
        [novaTarefa.descricao, novaTarefa.data, novaTarefa.hora,  novaTarefa.status], 
        (tx, result) => {
            console.log(JSON.stringify(result));
            const { rows } = result;
            if(rows.rowsAffected > 0)
                return true;
            return false;
        });
    });
  };
