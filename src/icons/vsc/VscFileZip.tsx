

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscFileZip = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M2.5 1h11l.5.5v5l-.15.35-.85.86v6.79l-.5.5h-10l-.5-.5v-13l.5-.5zM6 2H5v2h1V2zm0 12h4V7.68l-.85-.85L9 6.47V2H7v2.5l-.5.5H6v1H5V5h-.5L4 4.5V2H3v12h2v-1h1v1zm0-2v1h1v-1H6zm0-1v1H5v-1h1zm0-1h1v1H6v-1zm0-1v1H5V9h1zm0-1h1v1H6V8zm0-1v1H5V7h1zm0 0h1V6H6v1zm6.15.15l.85-.86V2h-3v4.27l.85.85.15.35V14h1V7.5l.15-.35z" />
        </G>
      </Svg>
    );
  }

