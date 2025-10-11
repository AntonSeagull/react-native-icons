

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgPentagonTopLeft = (props: IconProps) => {

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
          <Path d="M14.3301 15.1601L11 19.3922L6 10.7319L9.33013 6.49988L14.6603 5.73193L19.6603 14.3922L14.3301 15.1601ZM16.4512 12.8339L13.2531 13.2947L11.255 15.8339L8.40908 10.9046L10.4072 8.36536L13.6052 7.90459L16.4512 12.8339Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

