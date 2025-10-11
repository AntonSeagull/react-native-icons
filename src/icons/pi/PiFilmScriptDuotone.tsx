

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiFilmScriptDuotone = (props: IconProps) => {

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
          <Path d="M208,40V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H200A8,8,0,0,1,208,40Z" />
          <Path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24Zm0,192H56V40H200V216ZM96,80A12,12,0,1,1,84,68,12,12,0,0,1,96,80Zm0,96a12,12,0,1,1-12-12A12,12,0,0,1,96,176Zm0-48a12,12,0,1,1-12-12A12,12,0,0,1,96,128Z" />
        </G>
      </Svg>
    );
  }

