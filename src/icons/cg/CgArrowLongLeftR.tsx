

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgArrowLongLeftR = (props: IconProps) => {

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
          <Path  d="M4.64872 7.72528L0.398926 11.9608L4.63443 16.2105L6.05103 14.7987L4.23673 12.9783L16.1027 13.019L19.3585 16.2747L23.6011 12.0321L19.3585 7.78945L16.1289 11.019L4.21801 10.9782L6.06055 9.14188L4.64872 7.72528ZM17.9443 12.0321L19.3585 10.6179L20.7727 12.0321L19.3585 13.4463L17.9443 12.0321Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

