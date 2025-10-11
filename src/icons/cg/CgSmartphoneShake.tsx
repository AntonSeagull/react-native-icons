

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgSmartphoneShake = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M13 14H11V16H13V14Z" fill="currentColor" />
          <Path  d="M8 7C8 5.89543 8.89543 5 10 5H14C15.1046 5 16 5.89543 16 7V17C16 18.1046 15.1046 19 14 19H10C8.89543 19 8 18.1046 8 17V7ZM10 7H14V17H10V7Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
          <Path  d="M18 9H20V15H18V9Z" fill="currentColor" />
          <Path  d="M0 14H2V10H0V14Z" fill="currentColor" />
          <Path  d="M6 15H4V9H6V15Z" fill="currentColor" />
          <Path  d="M24 10H22V14H24V10Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

