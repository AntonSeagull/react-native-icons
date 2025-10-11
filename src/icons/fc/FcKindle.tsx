

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcKindle = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M8,41V7c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v34c0,2.2-1.8,4-4,4H12C9.8,45,8,43.2,8,41z" fill="#37474F" />
          <Path d="M35,6H13c-0.6,0-1,0.4-1,1v29c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V7C36,6.4,35.6,6,35,6z" fill="#eee" />
        </G>
      </Svg>
    );
  }

