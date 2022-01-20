import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { Text, Card, Headline, IconButton, Button, Portal, Modal } from 'react-native-paper';
import moment from 'moment';

// utils
import { Material } from '../../utils/icons';
import { s, vs, mvs, wp, hp } from '../../utils/responsive';

// components
import { Page, Footer, Dialog } from '../../components';
import Header from './Header';
import Task from './Task';
import AddCenter from './AddCenter';
import Skeleton from './Skeleton';
import Fab from './Fab';
import AddPortal from './AddPortal';
import EditPortal from './EditPortal';

// context
import { UserContext } from '../../providers/contexts/User';
import { ThemeContext } from '../../providers/contexts/Theme';
import { CrudSessionContext } from '../../providers/contexts/CrudSession';

// theme
import { useTheme } from 'react-native-paper';

import dialogHelper from '../../utils/dialogHelper';

// providers
import { getTodoList, addTodoList, updateTodoList, deleteTodoList } from '../../providers/http/crud';

const Home = ({navigation}) => {

  /* ----------------------
  Initial State 
  ---------------------- */
  
  // context
  const {colors} = useTheme();

  const {user, setUser} = useContext(UserContext);
  const {mode, setMode} = useContext(ThemeContext);
  const {crudSession, setCrudSession} = useContext(CrudSessionContext);

  const [todoList, setTodoList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const [fabFlag, setFabFlag] = useState(true);

  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState('');

  const [addTitle, setAddTitle] = useState('');
  const [addDescription, setAddDescription] = useState('');
  const [addLoading, setAddLoading] = useState(false);

  const [editModal, setEditModal] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editId, setEditId] = useState(null);
  const [editLoading, setEditLoading] = useState(false);

  const [dialogConfig, setDialogConfig] = useState(dialogHelper);
  
  /* ----------------------
  Lifecycle
  ---------------------- */

  useEffect(() => {
    handleGetTodoList();
  }, []);

  /* ----------------------
  Function 
  ---------------------- */

  const showDialog = () => setDialogConfig({ ...dialogConfig, visible: true });
  const hideDialog = () => setDialogConfig({ ...dialogConfig, visible: false });


  const handleGetTodoList = () => {
    setRefreshing(true);

    getTodoList(crudSession)
    .then(response => {
      const { data, status } = response;

      if(status === 200){
        setTodoList(data);
        setRefreshing(false);
      }
      else{
        setRefreshing(false);
      }
    })
    .catch(e => {
      setRefreshing(false);
    })
  }

  const handleAddTodoList = () => {
    setAddLoading(true);

    addTodoList(
      crudSession, 
      addTitle,
      addDescription,
      moment().format('YYYY-MM-DD')
    )
    .then(response => {
      const { data, status } = response;

      setAddTitle('');
      setAddDescription('');

      if(status === 200){
        
        setAddLoading(false);

        setModalType('');
        setModal(false);

        handleGetTodoList();
      }
      else{
        setAddLoading(false);

        setModalType('');
        setModal(false);

        handleGetTodoList();
      }
    })
    .catch(e => {
      setAddTitle('');
      setAddDescription('');

      setAddLoading(false);
      setModalType('');
      setModal(false);

      handleGetTodoList();
    })
  }

  const handleDeleteTodoList = (id) => {

    setDialogConfig({ 
      ...dialogConfig, 
      visible: showDialog,
      title: 'Delete confirmation',
      message: "Click Ok to continue.",
      buttonList: [
        { text: 'Cancel', onPress: hideDialog },
        { text: 'Ok', onPress: () => {
          deleteTodoList(
            crudSession, 
            id
          )
          .then(response => {
            const { data, status } = response;
            if(status === 200){
              hideDialog();
              handleGetTodoList();
            }
            else{
              hideDialog();
            }
          })
          .catch(e => {
            hideDialog();
          })
        }},
      ]
    });
 
  }

  const handleEditToDoList = () => {
    setEditLoading(true);

    updateTodoList(crudSession, editId, editTitle, editDescription, moment().format('YYYY-MM-DD'))
    .then(response => {
      const { data, status } = response;
      if(status === 200){
        setEditLoading(false);

        setModalType('');
        setModal(false);

        handleGetTodoList();
      }
      else{
        // do the necessary
        setEditLoading(false);

        setModalType('');
        setModal(false);

        handleGetTodoList();
      }
    })
    .catch(e => {
      setEditLoading(false);

      setModalType('');
      setModal(false);

      handleGetTodoList();
    })

  } 
  
  const onRefresh = () => {
    handleGetTodoList();
  }

  return (
    <Page>
      {/* Mounted */}
      {todoList.length > 0 ? 
        fabFlag ? 
          <Fab onPress={() => {
              setModalType('add');
              setModal(true);
            }} 
          /> 
          :
          null
        : 
        null 
      }

      <Dialog  
        visible={dialogConfig.visible}
        onDismiss={hideDialog}
        title={dialogConfig.title}
        message={dialogConfig.message}
        buttonList={dialogConfig.buttonList}
        dismissable={dialogConfig.dismissable}
      />    

      <Portal>
        <Modal visible={modal}
          onDismiss={() => setModal(false)}
          contentContainerStyle={{ 
            backgroundColor: colors.background, 
            borderWidth: mode === 'dark' ? 1 : 0,
            borderColor: colors.text,
            padding: 20, 
            margin: 20,
            borderRadius: 5
          }}
        >
          {modalType === 'add' ?
            <AddPortal 
              title={addTitle}
              setTitle={setAddTitle}
              description={addDescription}
              setDiscription={setAddDescription}
              onPress={handleAddTodoList}
              loading={addLoading}
            />    
            :
            <EditPortal
              id={editId}
              title={editTitle}
              setTitle={setEditTitle}
              description={editDescription}
              setDiscription={setEditDescription}
              onPress={handleEditToDoList}
              loading={editLoading}
            />
           
          }
        </Modal>
      </Portal>


      {/* ======================================================================================================== */}

      {/* Render */}
      <Header 
        user={user}
        setUser={setUser}
        mode={mode}
        setMode={setMode}
      />
        <ScrollView 
          contentContainerStyle={{ 
            flexGrow: 1,
            marginTop: 10,
            paddingBottom: 20,
          }}
          refreshControl={ <RefreshControl 
            refreshing={refreshing} 
            onRefresh={onRefresh}
            /> 
          }
          onScroll={({nativeEvent}) => {
            // https://stackoverflow.com/questions/41056761/detect-scrollview-has-reached-the-end
            const { contentOffset } = nativeEvent;
            if(contentOffset.y === 0)
              setFabFlag(true);
            else
              setFabFlag(false);
          }}
        >
          {
            refreshing ? 
              <Skeleton />
            :
              todoList.length > 0 ? 
                todoList.map((value, index) => <Task 
                key={index} 
                value={value} 
                index={index} 
                onLongPress={() => {
                  setEditTitle(value.title);
                  setEditDescription(value.description);
                  setEditId(value._id);
                  setModalType('edit');
                  setModal(true);
                }}
                deletion={handleDeleteTodoList}
              />)
              :
              <AddCenter onPress={() => {
                  setModalType('add');
                  setModal(true);
                }}
              />
          }
      
        </ScrollView>
      {/* <Footer /> */}
    </Page>
    
  );
};

export default Home;


