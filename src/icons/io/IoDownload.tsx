

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoDownload = (props: IconProps) => {

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
          <Path d="M376,160H272V313.37l52.69-52.68a16,16,0,0,1,22.62,22.62l-80,80a16,16,0,0,1-22.62,0l-80-80a16,16,0,0,1,22.62-22.62L240,313.37V160H136a56.06,56.06,0,0,0-56,56V424a56.06,56.06,0,0,0,56,56H376a56.06,56.06,0,0,0,56-56V216A56.06,56.06,0,0,0,376,160Z" />
          <Path d="M272,48a16,16,0,0,0-32,0V160h32Z" />
        </G>
      </Svg>
    );
  }

