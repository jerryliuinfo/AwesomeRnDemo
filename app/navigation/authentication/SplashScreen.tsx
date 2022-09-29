import React from "react";
import LoadingView from "../../widget/LoadingView";


export class SplashScreen extends React.Component<any, any>{
  render() {
    return (
      <LoadingView isShowLoading={true}/>
    );
  }
}
