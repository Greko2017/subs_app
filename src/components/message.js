import React from 'react'
import { connect } from 'react-redux'
import Alert from 'react-bootstrap/Alert'

const Message = ({content, show, variant, title, sub_content}) => {
    console.log('--- In Message :>> ', content, show, variant, title, sub_content);
    var temp = document.createElement('div');
    temp.innerHTML = content;
    var htmlObject = temp.firstChild;
  return (
    <>
      <Alert show={show} variant={variant}>
        <Alert.Heading>{title}</Alert.Heading>
        <p>
            {htmlObject instanceof Array ? htmlObject.map(dom=>dom) : content}
        </p>
        {sub_content ? (
            <>                
                <hr />
                <p className="mb-0">
                    {sub_content}
                </p>
            </>
        ) : null}
    </Alert>

      {/* {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>} */}
    </>
  );
}

const mapStateToProps = (state) => {
    // console.log('state :>> ', state);
    return {        
        content: state.global.message.content,
        show: state.global.message.show,
        variant: state.global.message.variant,
        title: state.global.message.title,
        sub_content: state.global.message.sub_content,
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Message)
