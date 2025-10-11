

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgPentagonTopRight = (props: IconProps) => {

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
          <Path  d="M10.3301 15.1601L5 14.3922L10 5.73193L15.3301 6.49988L18.6603 10.7319L13.6603 19.3922L10.3301 15.1601ZM13.4052 15.8339L11.4072 13.2947L8.20908 12.8339L11.055 7.90459L14.2531 8.36536L16.2512 10.9046L13.4052 15.8339Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

