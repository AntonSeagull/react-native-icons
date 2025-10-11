

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiAncientColumns = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M57 39v16h110V39H57zm32 34v318h46V73H89zm334 21.56l-46 23.04V391h46V94.56zM254.2 187L233 197.6V391h46V211.7L254.2 187zM73 409v30h78v-30H73zm144 0v30h78v-30h-78zm144 0v30h78v-30h-78zM38.49 457l-10 30H483.5l-10-30H38.49z" />
        </G>
      </Svg>
    );
  }

