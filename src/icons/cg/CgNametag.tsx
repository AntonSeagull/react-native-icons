

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgNametag = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M4 14V20H10V18H6V14H4Z" fill="currentColor" />
          <Path d="M9 9V15H15V9H9ZM13 11H11V13H13V11Z" fill="currentColor" />
          <Path d="M4 10V4H10V6H6V10H4Z" fill="currentColor" />
          <Path d="M20 10V4H14V6H18V10H20Z" fill="currentColor" />
          <Path d="M20 14V20H14V18H18V14H20Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

