import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const InputTextComponent = () => {
  const [msg,setMsg] = useState('')
  return (
    <View style={{padding:10}}>
      <TextInput
        style={{height:40, borderColor:"#ff0000", borderWidth:2, padding:2}}
        placeholder= "type here to translate"
        onChangeText={ text =>
          setMsg(text)
        }
        defaultValue={msg}

      />
      <Text style={{color:Colors.white}}>{msg}</Text>
    </View>
  )
}


function UselessInput(props){
  return (
    <TextInput
      {...props}
      maxLength={40}
      editable={true}
      allowFontScaling={true}
      autoComplete={"password"}
      autoCorrect={true}
      autoFocus={true}
      //是否隐藏光标
      caretHidden={false}
      clearButtonMode={"always"}
      defaultValue={"我是默认输入的字符"}
      enablesReturnKeyAutomatically={true}
      //指定一个图片放置在左侧。图片必须放置在/android/app/src/main/res/drawable目录下，经过编译后按如下形式引用（无路径无后缀）
      inlineImageLeft={"ic_float_album"}
      //给放置在左侧的图片设置 padding 样式。
      inlineImagePadding={10}
    />

  )
}

export const InputTextPropsComponent = () => {
  const [value,onChangeText] = useState("Useless multiline Placeholder")
  return (
    <View style={{
         backgroundColor:value,
        borderBottomColor:"#ff0000",
        borderBottomWidth:2,
        marginHorizontal:20
    }
    }>
      <UselessInput
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        value={value}
      />

    </View>
  )
}


