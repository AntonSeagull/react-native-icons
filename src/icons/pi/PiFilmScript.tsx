

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiFilmScript = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24Zm0,192H56V40H200V216ZM96,76A12,12,0,1,1,84,64,12,12,0,0,1,96,76Zm0,104a12,12,0,1,1-12-12A12,12,0,0,1,96,180Zm0-52a12,12,0,1,1-12-12A12,12,0,0,1,96,128Z" />
        </G>
      </Svg>
    );
  }

