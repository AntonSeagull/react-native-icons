

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcSlrBackSide = (props: IconProps) => {

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
          <Path d="M40,10h-7.6l-2-3c-0.4-0.6-1-0.9-1.7-0.9h-9.6c-0.7,0-1.3,0.3-1.7,0.9l-2,3H8c-2.2,0-4,1.8-4,4v24 c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V14C44,11.8,42.2,10,40,10z" fill="#5E35B1" />
          <Path d="M11,16h20c0.6,0,1,0.4,1,1v16c0,0.6-0.4,1-1,1H11c-0.6,0-1-0.4-1-1V17C10,16.4,10.4,16,11,16z" fill="#F57C00" />
          <Path d="M34,10h6V9.2C40,8.5,39.5,8,38.8,8h-3.6C34.5,8,34,8.5,34,9.2V10z" />
        </G>
      </Svg>
    );
  }

