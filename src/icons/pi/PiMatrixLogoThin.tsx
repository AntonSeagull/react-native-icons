

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiMatrixLogoThin = (props: IconProps) => {

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
          <Path  d="M44,44V212H64a4,4,0,0,1,0,8H40a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H64a4,4,0,0,1,0,8Zm172-8H192a4,4,0,0,0,0,8h20V212H192a4,4,0,0,0,0,8h24a4,4,0,0,0,4-4V40A4,4,0,0,0,216,36ZM152,92a28,28,0,0,0-24,13.6,28,28,0,0,0-44-5.17V96a4,4,0,0,0-8,0v64a4,4,0,0,0,8,0V120a20,20,0,0,1,40,0v40a4,4,0,0,0,8,0V120a20,20,0,0,1,40,0v40a4,4,0,0,0,8,0V120A28,28,0,0,0,152,92Z" />
        </G>
      </Svg>
    );
  }

