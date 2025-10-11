

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CiCircleChevDown = (props: IconProps) => {

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
          <Path d="M12.35,13.85a.492.492,0,0,1-.7,0l-3-3a.495.495,0,0,1,.7-.7L12,12.79l2.65-2.64a.495.495,0,0,1,.7.7Z" />
          <Path d="M21.933,12A9.933,9.933,0,1,1,12,2.067,9.944,9.944,0,0,1,21.933,12ZM3.067,12A8.933,8.933,0,1,0,12,3.067,8.943,8.943,0,0,0,3.067,12Z" />
        </G>
      </Svg>
    );
  }

