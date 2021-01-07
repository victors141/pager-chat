import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: center;
`

export const BoxContainer = styled.div`
  border: 2px solid #e6e6e6;
  border-radius: 8px;
  width: 600px;
  margin: auto;
  box-shadow: 0px 3px 13px 0px rgb(0 0 0 / 5%);
  box-sizing: border-box;

  &.chat-container {
    padding: 24px;
    padding-bottom: 0;
  }

  &.card-join {
    padding: 40px;

    .title {
      font-size: 2rem;
      margin: 0;
    }

    .main-form {
      margin-top: 40px;
    }

    .submit-btn {
      text-align: right;
    }
  }
`
