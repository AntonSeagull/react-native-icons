

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoArchiveSharp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M64,160V440a24,24,0,0,0,24,24H424a24,24,0,0,0,24-24V160ZM256,390.63,169.32,304,192,281.32,240,329.37V208h32V329.37l48.07-48.07,22.61,22.64Z" />
        </G>
      </Svg>
    );
  }

