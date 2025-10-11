

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiToteSimpleBold = (props: IconProps) => {

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
          <Path  d="M239,66.75a20.12,20.12,0,0,0-15-6.75H179.83A52,52,0,0,0,76.17,60H32.08A20,20,0,0,0,12.14,82.35l14.25,120A20.06,20.06,0,0,0,46.33,220H209.67a20.06,20.06,0,0,0,19.94-17.65l14.25-120A20,20,0,0,0,239,66.75ZM128,36a28,28,0,0,1,27.71,24H100.29A28,28,0,0,1,128,36Zm78.19,160H49.81L36.5,84h183Z" />
        </G>
      </Svg>
    );
  }

