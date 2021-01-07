import styled from '@emotion/styled'

export const MessageContainer = styled.div`
  display: flex;
  margin-bottom: 24px;
  min-height: 40px;
`

export const Avatar = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
  flex-grow: 0;

  img {
    width: 100%;
  }
`
export const Content = styled.div`
  width: 100%;
  padding-left: 14px;
`

export const Author = styled.p`
  margin: 0;
  font-weight: bold;
  margin-bottom: 4px;
`

export const Text = styled.p`
  margin-bottom: 0;
  margin: 0;
  line-height: 22px;
`

export const Image = styled.img`
  margin-top: 4px;
  margin-bottom: 4px;
  width: 260px;
`

export const MessageTime = styled.span`
  font-weight: normal;
  font-size: 0.75rem;
  color: #969696;
  margin-left: 4px;
`
