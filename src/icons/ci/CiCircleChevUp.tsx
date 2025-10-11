

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CiCircleChevUp = (props: IconProps) => {

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
          <Path  d="M11.65,10.15a.492.492,0,0,1,.7,0l3,3a.495.495,0,0,1-.7.7L12,11.21,9.35,13.85a.495.495,0,0,1-.7-.7Z" />
          <Path  d="M2.067,12A9.933,9.933,0,1,1,12,21.934,9.944,9.944,0,0,1,2.067,12Zm18.866,0A8.933,8.933,0,1,0,12,20.934,8.943,8.943,0,0,0,20.933,12Z" />
        </G>
      </Svg>
    );
  }

