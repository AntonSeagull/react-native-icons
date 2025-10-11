

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiOutline = (props: IconProps) => {

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
          <Path d="M21 19v-9c0-1.103-.897-2-2-2h-3V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h3v3c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2zM5 14V5h9v3h-4c-1.103 0-2 .897-2 2v4H5zm9.001 0H10v-4h4.001v4zM10 16h4c1.103 0 2-.897 2-2v-4h3l.001 9H10v-3z" />
        </G>
      </Svg>
    );
  }

