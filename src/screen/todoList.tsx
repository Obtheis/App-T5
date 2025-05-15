import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function TodoList() {
  const [lists, setLists] = useState<string[]>([]); // chứa danh sách list nhiệm vụ
  const [input, setInput] = useState(""); // chứa giá trị nhập vào từ input

  const handleAdd = () => {
    if (input=="") return;
    setLists([
      input,...lists
    ]);
    setInput("");
  }
  const handleDelete =(index:number) => {
    const newList=lists.filter((item,i)=>i !=index);
    setLists(newList)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To do list</Text>
      <View style={styles.formInput}>
        <TextInput placeholder="Enter to do ....." style={styles.input} value={input} onChangeText={setInput} />
        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Text style={styles.textBtn}>Add</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.listTodo}>
        {
          lists.map((item, index) => {
            return (
              <View style={styles.formInput} key={index}>
                <Text style={styles.txtTodo}>{item}</Text>
                <TouchableOpacity style={styles.btnDelete} onPress={()=>handleDelete(index)}>
                  <Text style={styles.textBtn}>Delete</Text>
                </TouchableOpacity>
              </View>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    padding: 10
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  formInput: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginBottom: 10
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
    width: 80
  },
  textBtn: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  txtTodo: {
    flex: 1,
    color: 'yellow'
  },
  btnDelete: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    width: 100
  },
  listTodo: {
    flex: 1
  }
})
