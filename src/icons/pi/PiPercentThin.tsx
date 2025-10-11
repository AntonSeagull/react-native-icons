

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiPercentThin = (props: IconProps) => {

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
          <Path  d="M202.83,58.81l-144,144a4,4,0,0,1-5.66-5.66l144-144a4,4,0,1,1,5.66,5.65ZM53.37,98.62A32,32,0,1,1,76,108,31.82,31.82,0,0,1,53.37,98.62ZM52,76a24,24,0,1,0,7-17A23.85,23.85,0,0,0,52,76ZM212,180a32,32,0,1,1-9.37-22.63A31.82,31.82,0,0,1,212,180Zm-8,0a24,24,0,1,0-7,17A23.89,23.89,0,0,0,204,180Z" />
        </G>
      </Svg>
    );
  }

