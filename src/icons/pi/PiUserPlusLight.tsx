

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiUserPlusLight = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M254,136a6,6,0,0,1-6,6H230v18a6,6,0,0,1-12,0V142H200a6,6,0,0,1,0-12h18V112a6,6,0,0,1,12,0v18h18A6,6,0,0,1,254,136Zm-57.41,60.14a6,6,0,1,1-9.18,7.72C166.9,179.45,138.69,166,108,166s-58.89,13.45-79.41,37.86a6,6,0,0,1-9.18-7.72C35.14,177.41,55,164.48,77,158.25a66,66,0,1,1,62,0C161,164.48,180.86,177.41,196.59,196.14ZM108,154a54,54,0,1,0-54-54A54.06,54.06,0,0,0,108,154Z" />
        </G>
      </Svg>
    );
  }

